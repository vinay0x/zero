import React, { ReactElement } from 'react';
import Login from './Login';
import Features from './Features';

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className="grid grid-cols-2 h-screen">
      <Login />
      <Features />
    </div>
  );
}
