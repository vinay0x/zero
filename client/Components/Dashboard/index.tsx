import organizationStore from '@client/stores/organizations';
import { view } from '@risingstack/react-easy-state';
import React, { ReactElement } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Button from '../Common/Button';
import Sidebar from './Sidebar';
import Settings from './Settings';

interface Props {}

export default view(function Dashboard({}: Props): ReactElement {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex w-full flex-grow-1">
        <Switch>
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  );
});
