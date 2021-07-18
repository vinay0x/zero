import Authentication from '@client/Components/Authentication';
import PrivateRoute from '@client/Components/Common/PrivateRoute';
import Home from '@client/Components/Home';
import { view } from '@risingstack/react-easy-state';
import React, { ReactElement, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { initializeAxios } from './apis/axios';
import userStore from './stores/user';

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
            component={Home}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
});
