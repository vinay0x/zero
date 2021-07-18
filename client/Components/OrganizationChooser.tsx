import { setOrganizationHeader } from '@client/apis/axios';
import { fetchOrganizations as fetchOrganizationsAPI } from '@client/apis/user';
import organizationStore from '@client/stores/organizations';
import { view } from '@risingstack/react-easy-state';
import React, { ReactElement, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from './Common/Button';

interface Props {}

export default view(function OrganizationChooser({}: Props): ReactElement {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (organizationStore.list.length) {
      setLoading(false);
    } else {
      fetchOrganizations();
    }
  }, []);

  const fetchOrganizations = async () => {
    try {
      const res = await fetchOrganizationsAPI();
      organizationStore.list = res.data;
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h1>Loading organizations</h1>;
  }

  return (
    <div>
      Please pick an organization
      {organizationStore.list.map((org) => (
        <OrgItem key={org.id} org={org} />
      ))}
    </div>
  );
});

const OrgItem = view(({ org }) => {
  const history = useHistory();
  const setOrganization = () => {
    organizationStore.current = org;
    localStorage.setItem('currentOrganization', JSON.stringify(org));
    setOrganizationHeader(org.id);
    history.push('/');
  };
  return <Button label={org.name} onClick={setOrganization} />;
});
