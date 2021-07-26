import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  items: Array<any>;
}

export default function SideTabs({ title, items }: Props): ReactElement {
  return (
    <div className="sidetabs">
      <div className="p-8 text-xl font-medium">{title}</div>
      <div className="flex flex-col flex-1 space-y-1 font-normal text-muted">
        {items.map((item) => (
          <NavItem
            Icon={item.icon}
            to={item.to}
            label={item.title}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

const NavItem = ({ Icon, exact = false, label, to = null, onClick = null }) => {
  return (
    <NavLink
      to={to}
      exact={exact}
      onClick={onClick}
      className="sidetab-item"
      activeClassName="active"
    >
      <Icon width={20} height={20} />
      <div className="ml-4">{label}</div>
    </NavLink>
  );
};
