import React, { ReactElement } from 'react';
import Button from '@components/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Authentication from '@client/Authentication';

export default function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path={['/login', 'signup']} component={Authentication} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}
