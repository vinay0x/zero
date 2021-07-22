import classNames from 'classnames';
import React, { ReactElement } from 'react';

interface Props {
  className?: string;
  style?: 'light' | 'dark';
  thin?: boolean;
}

export default function Spinner(props: Props): ReactElement {
  return (
    <div
      id="spinner"
      className={classNames(
        'h-4 w-4',
        {
          thin: props.thin,
        },
        props.style === 'light' ? 'light' : 'dark',
        props.className,
      )}
    ></div>
  );
}
