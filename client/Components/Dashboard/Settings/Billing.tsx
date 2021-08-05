import { checkout } from '@client/apis/billing';
import { plans } from '@client/constants/plans';
import useAsync from '@client/hooks/useAsync';
import Badge from '@components/Common/Badge';
import Button from '@components/Common/Button';
import Check from '@components/Common/Icons/Check';
import CheckCertificate from '@components/Common/Icons/CheckCertificate';
import CheckoutIcon from '@components/Common/Icons/Checkout';
import Layout from '@components/Common/Layout';
import classNames from 'classnames';
import React, { ReactElement, useState } from 'react';

interface Props {}

export default function Billing({}: Props): ReactElement {
  const [active, setActive] = useState(plans[0]);

  const [checkoutApi, loading] = useAsync(checkout, {
    onComplete: ({ data }) => window.location = data
  });

  const handleCheckout = () => checkoutApi({ stripePriceId: active.stripePriceId})

  return (
    <Layout title="Plans & Billing">
      <div className="p-8 pt-1.5">
        <p className="section-title">Choose a plan</p>
        <div className="flex py-4 space-x-4">
          {plans.map((plan) => (
            <BillingCard
              {...plan}
              active={active.label === plan.label}
              setActive={() => setActive(plan)}
              key={plan.label}
            />
          ))}
        </div>
      </div>
      <div className="p-8 pt-1.5">
        <Button loading={loading} onClick={handleCheckout} label="Checkout" Icon={<CheckoutIcon width={18} height={18} />} />
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
    <div className="text-muted">
      <ul>
        {features.map((f) => (
          <li key={f} className="flex items-center my-1 space-x-1.5 text-sm ">
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
    </div>
  </div>
);
