import React, { ReactElement } from 'react';

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className="grid h-screen grid-cols-12 gap-4">
      <div className="grid-cols-5 col-start-2">Hi</div>
      <div className="grid-cols-5 col-end-11">Hi</div>
    </div>
  );
}
