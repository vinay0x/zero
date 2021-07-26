import Badge from '@components/Common/Badge';
import CheckCertificate from '@components/Common/Icons/CheckCertificate';
import Layout from '@components/Common/Layout';
import classNames from 'classnames';
import React, { ReactElement, useState } from 'react';

interface Props {}

export default function Billing({}: Props): ReactElement {
  const plans = [
    {
      label: 'Starter',
      price: '19',
      color: 'green',
      badgeClassNames: 'self-start',
    },
    {
      label: 'Premium',
      price: '49',
      color: 'red',
      badgeClassNames: 'self-start',
    },
    {
      label: 'Elite',
      price: '149',
      color: 'purple',
      badgeClassNames: 'self-start',
    },
  ];
  const [active, setActive] = useState(plans[0].label);
  return (
    <Layout title="Plans & Billing">
      <div className="p-8 pt-1.5">
        <p className="section-title">Choose a plan</p>
        <div className="flex py-4 space-x-4">
          {plans.map((plan) => (
            <BillingCard
              {...plan}
              active={active === plan.label}
              setActive={() => setActive(plan.label)}
              key={plan.label}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

const BillingCard = ({ label, color, price, active, setActive }) => (
  <div
    className={classNames(
      'flex flex-col space-y-2 pt-2 card cursor-pointer transition-all ease-in-out duration-200 relative',
      {
        [`border-${color}-500 shadow`]: active,
      },
    )}
    onClick={setActive}
  >
    <CheckCertificate
      className={classNames(
        `absolute text-${color}-600 top-4 right-4 transition-all ease-in-out duration-200 opacity-0`,
        { 'opacity-100': active },
      )}
    />
    <Badge
      label={label}
      className={`self-start bg-${color}-200 text-${color}-800`}
    />
    <p className="text-xl">${price}/mo</p>
    <p className="text-muted">
      Extraordinary crimes against the people and the state had to be avenged by
      agents extraordinary.
    </p>
  </div>
);
