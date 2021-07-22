import React, { ReactElement } from 'react';
import Spinner from './Spinner';

interface Props {}

export default function PageLoader({}: Props): ReactElement {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-background">
      <Spinner thin className="w-6 h-6" />
    </div>
  );
}
