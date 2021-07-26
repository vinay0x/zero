import classNames from 'classnames';
import React, { ReactElement } from 'react';

interface Props {
  label: string;
  className?: string;
}

export default function Badge(props: Props): ReactElement {
  return (
    <div
      className={classNames('rounded-full text-xs px-2 py-px', props.className)}
    >
      {props.label}
    </div>
  );
}
