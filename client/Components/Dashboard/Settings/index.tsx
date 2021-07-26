import BillingIcon from '@components/Common/Icons/Billing';
import ConfigIcon from '@components/Common/Icons/Config';
import Profile from '@components/Common/Icons/Profile';
import Layout from '@components/Common/Layout';
import SideTabs from '@components/Common/SideTabs';
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router';
import Billing from './Billing';
import GeneralSettings from './General';
import ProfileSettings from './Profile';

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className="flex w-full">
      <SideTabs
        items={[
          {
            title: 'General Settings',
            to: '/settings/general',
            icon: ConfigIcon,
          },
          {
            title: 'Profile Settings',
            to: '/settings/profile',
            icon: Profile,
          },
          {
            title: 'Plans & Billing',
            to: '/settings/billing',
            icon: BillingIcon,
          },
        ]}
        title="Settings"
      ></SideTabs>
      <Switch>
        <Route path="/settings/general" component={GeneralSettings} />
        <Route path="/settings/profile" component={ProfileSettings} />
        <Route path="/settings/billing" component={Billing} />
      </Switch>
    </div>
  );
}
