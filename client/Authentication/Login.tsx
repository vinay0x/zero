import LogoWithGradient from '@client/assets/logos/LogoGradient';
import Button from '@components/Button';
import Input from '@components/Input';
import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export default function Features({}: Props): ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex items-center justify-center h-full bg-white md:w-1/2">
      <div className="px-8 pt-8 pb-12 space-y-6 md:w-96">
        <div className="mr-12">
          <LogoWithGradient width={32} height={32} />
          <p className="mt-2 text-3xl font-bold text-gray-900">
            Log in to continue.
          </p>
          <p className="text-base text-gray-700">
            Or create a new account{' '}
            <Link className="font-medium text-gray-900 underline" to="/signup">
              here
            </Link>
          </p>
        </div>
        <div className="flex flex-col">
          <Input
            label="Email"
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="mb-4"
            label="Password"
            type="password"
            value={email}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-2" centerLabel label="Login" />
          <div className="relative my-4">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 text-gray-500 bg-white">OR</span>
            </div>
          </div>
          <Button
            style="secondary"
            size="sm"
            centerLabel
            label="Continue with Google"
          />
        </div>
      </div>
    </div>
  );
}
