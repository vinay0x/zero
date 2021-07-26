import Badge from '@components/Common/Badge';
import Check from '@components/Common/Icons/Check';
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
      badgeClassNames: 'self-start',
      features: [
        '250 monthly feedbacks',
        'Upto 3 collection channels',
        '1 user',
        'Basic email support',
        'Notifications engine',
      ],
    },
    {
      label: 'Premium',
      price: '49',
      badgeClassNames: 'self-start',
      features: [
        'Everything in Starter',
        'Unlimited feedbacks',
        'Upto 5 users',
        'Upto 10 collection channels',
        'Email and live chat support',
        'Reports engine',
      ],
    },
    {
      label: 'Elite',
      price: '149',
      badgeClassNames: 'self-start',
      features: [
        'Everything in Premium',
        'Upto 10 users',
        'Priority support',
        'Insights engine',
        'Unlimited integrations',
      ],
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

const BillingCard = ({ label, price, active, setActive, features }) => (
  <div
    className={classNames(
      'flex-1 max-w-xs flex flex-col space-y-2 pt-2 card cursor-pointer transition-all ease-in-out duration-200 relative',
      {
        [`border-brand filter drop-shadow-md`]: active,
      },
    )}
    onClick={setActive}
  >
    <CheckCertificate
      className={classNames(
        'absolute text-brand top-4 right-4 transition-all ease-in-out duration-200 opacity-0',
        { 'opacity-100': active },
      )}
    />
    <Badge label={label} className="self-start bg-gray-200 text-primary" />
    <p className="text-xl">${price}/mo</p>
    <p className="text-muted">
      <ul>
        {features.map((f) => (
          <li className="flex items-center my-1 space-x-1.5 text-sm ">
            <Check
              width={12}
              height={12}
              strokeWidth={3}
              className="text-green-500"
            />
            <p>{f}</p>
          </li>
        ))}
      </ul>
    </p>
  </div>
);
