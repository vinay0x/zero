import PrivateRoute from '@client/Components/Common/PrivateRoute';
import organizationStore from '@client/stores/organizations';
import { view } from '@risingstack/react-easy-state';
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from './Dashboard';
import OrganizationChooser from './OrganizationChooser';

interface Props {}

export default view(function index({}: Props): ReactElement {
  const organizationIsSelected = !!organizationStore.current;
  return (
    <Switch>
      <Route path="/organization" component={OrganizationChooser} />
      <PrivateRoute
        path="/"
        redirectRoute="/organization"
        condition={organizationIsSelected}
        component={Dashboard}
      />
    </Switch>
  );
});
