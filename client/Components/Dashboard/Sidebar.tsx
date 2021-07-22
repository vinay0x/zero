import LogoOnly from '@client/assets/logos/LogoOnly';
import organizationStore from '@client/stores/organizations';
import Dashboard from '@components/Common/Icons/Dashboard';
import Feedback from '@components/Common/Icons/Feedback';
import Integration from '@components/Common/Icons/Integration';
import Logout from '@components/Common/Icons/Logout';
import Profile from '@components/Common/Icons/Profile';
import Settings from '@components/Common/Icons/Settings';
import Team from '@components/Common/Icons/Team';
import { view } from '@risingstack/react-easy-state';
import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout as logoutAPI } from '@client/apis/auth';
import ProgressBar from '@components/Common/ProgressBar';

interface Props {}

export default view(function Sidebar({}: Props): ReactElement {
  return (
    <div className="sidebar">
      <div className="flex items-center p-8 space-x-3">
        <LogoOnly width={28} height={28} />
        <div className="font-medium">{organizationStore.current.name}</div>
      </div>
      <div className="flex flex-col flex-1 space-y-2 font-normal text-muted">
        <NavItem Icon={Dashboard} label="Dashboard" exact to="/" />
        <NavItem Icon={Feedback} label="Surveys" to="/surveys" />
        <NavItem Icon={Team} label="Team" to="/team" />
        <NavItem Icon={Integration} label="Integrations" to="/integrations" />
        <NavItem Icon={Settings} label="Settings" to="/settings" />
      </div>
      <div className="flex flex-col px-8 py-4 space-y-2 text-xs border-t border-b border-border">
        <div className="font-medium">Monthly Usage</div>
        <ProgressBar progress={10} />
        <div className="text-muted">10/250 messages</div>
      </div>
      <div className="flex flex-col py-8 space-y-1 text-muted">
        <NavItem Icon={Profile} label="Profile" to="/profile" />
        <div
          onClick={() => logoutAPI()}
          className="py-1 cursor-pointer sidebar-item"
        >
          <Logout width={20} height={20} strokeWidth={2} />
          <div className="ml-4 font-medium">Logout</div>
        </div>
      </div>
    </div>
  );
});

const NavItem = ({ Icon, exact = false, label, to = null, onClick = null }) => {
  return (
    <NavLink
      to={to}
      exact={exact}
      onClick={onClick}
      className="py-1 sidebar-item"
      activeClassName="border-primary text-primary font-medium"
    >
      <Icon width={20} height={20} />
      <div className="ml-4">{label}</div>
    </NavLink>
  );
};
