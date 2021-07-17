import React, { ReactElement, useEffect, useState } from 'react';
import Button from '@components/Button';
import PrivateRoute from '@components/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Authentication from '@client/Authentication';
import Dashboard from '@client/Dashboard';
import { view } from '@risingstack/react-easy-state';
import userStore from './stores/user';
import { initializeAxios } from './apis/axios';

export default view(function App(): ReactElement {
  const [ready, setReady] = useState(false);
  const isLoggedIn = userStore.authenticated;

  useEffect(() => {
    initializeAxios();
    setReady(true);
  }, []);

  if (!ready) {
    return <div>Loading</div>;
  } else {
    return (
      <Router>
        <Switch>
          <Route path={['/login', 'signup']} component={Authentication} />
          {!isLoggedIn && <Route exact path="/" component={Authentication} />}
          <PrivateRoute
            path="/"
            redirectRoute="/login"
            condition={isLoggedIn}
            component={Dashboard}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
});
