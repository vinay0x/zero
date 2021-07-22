import organizationStore from '@client/stores/organizations';
import { view } from '@risingstack/react-easy-state';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import Button from '../Common/Button';
import Sidebar from './Sidebar';

interface Props {}

export default view(function Dashboard({}: Props): ReactElement {
  const history = useHistory();
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex items-center w-full p-4 space-x-4 flex-grow-1">
        <Button
          label="Change org"
          className="my-4"
          onClick={() => history.push('/organizations')}
        />
      </div>
    </div>
  );
});
