import React, { ReactElement } from 'react';
import Spinner from './Spinner';

interface Props {}

export default function PageLoader({}: Props): ReactElement {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-background">
      <div className="mr-2 text-sm leading-none">
        Please wait while we load things for you
      </div>
      <Spinner thin className="w-5 h-5" />
    </div>
  );
}
