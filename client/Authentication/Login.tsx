import { login as loginAPI } from '@client/apis/auth';
import { setAccessToken } from '@client/apis/axios';
import LogoWithGradient from '@client/assets/logos/LogoGradient';
import userStore from '@client/stores/user';
import Button from '@components/Button';
import Input from '@components/Input';
import { view } from '@risingstack/react-easy-state';
import { IsEmail, IsNotEmpty } from 'class-validator';
import React, { ReactElement, useState } from 'react';
import { useValidation } from 'react-class-validator';
import { Link, useHistory } from 'react-router-dom';

class LoginValidation {
  @IsEmail({}, { message: 'Invalid email' })
  public email: string;

  @IsNotEmpty({
    message: 'Password cannot be empty',
  })
  public password: string;
}

export default view(function Login({}): ReactElement {
  const [validate, errors] = useValidation(LoginValidation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const login = async () => {
    try {
      if (await validate({ email, password })) {
        const res = await loginAPI({
          email,
          password,
        });
        localStorage.setItem('accessToken', res.data.accessToken);
        setAccessToken(res.data.accessToken);
        userStore.authenticated = true;
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-full grid-cols-1 bg-white">
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
        <form className="flex flex-col">
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="mt-2" centerLabel label="Login" onClick={login} />
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
            type="button"
            size="sm"
            centerLabel
            label="Continue with Google"
          />
        </form>
        {JSON.stringify(errors)}
      </div>
    </div>
  );
});
