import React, { ReactElement } from 'react';
import Login from './Login';
import Features from './Features';

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className="flex flex-col w-screen h-screen md:flex-row">
      <Login />
      <Features />
    </div>
  );
}
