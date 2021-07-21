import { logout as logoutAPI } from '@client/apis/auth';
import organizationStore from '@client/stores/organizations';
import { view } from '@risingstack/react-easy-state';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import Button from '../Common/Button';

interface Props {}

export default view(function Dashboard({}: Props): ReactElement {
  const history = useHistory();
  return (
    <div className="p-8">
      Hey! This is the dashboard page for{' '}
      <strong>{organizationStore.current.name}</strong>
      <div className="flex items-center space-x-4">
        <Button
          label="Change org"
          className="my-4"
          onClick={() => history.push('/organizations')}
        />
        <Button label="Logout" onClick={(e) => logoutAPI()} />
      </div>
    </div>
  );
});
