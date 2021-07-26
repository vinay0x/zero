import React, { ReactElement } from 'react';

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props): ReactElement {
  return (
    <div className="h-1 overflow-hidden bg-gray-200 rounded">
      <div
        style={{ width: `${progress}%` }}
        className="w-full h-full bg-brand"
      ></div>
    </div>
  );
}
