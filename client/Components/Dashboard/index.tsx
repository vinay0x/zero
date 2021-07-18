import { logout as logoutAPI } from '@client/apis/auth';
import organizationStore from '@client/stores/organizations';
import { view } from '@risingstack/react-easy-state';
import React, { ReactElement } from 'react';
import Button from '../Common/Button';

interface Props {}

export default view(function Dashboard({}: Props): ReactElement {
  return (
    <div>
      Hey! This is the dashboard page for {organizationStore.current.name}
      <Button label="Logout" onClick={(e) => logoutAPI()} />
    </div>
  );
});
