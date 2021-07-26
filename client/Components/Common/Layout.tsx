import React, { ReactElement } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: Props): ReactElement {
  return (
    <div className="w-full">
      <div className="p-8 text-xl font-medium">{title}</div>
      {children}
    </div>
  );
}
