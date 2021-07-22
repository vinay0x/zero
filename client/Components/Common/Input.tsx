import classNames from 'classnames';
import React, { ReactElement } from 'react';

interface InputProps {
  className?: string;
  label?: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
}

export default function Input(props: InputProps): ReactElement {
  return (
    <label>
      {props.label && <span>{props.label}</span>}
      <input
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        className={classNames(
          'transition-all outline-none form-input text-sm text-primary block w-full py-1.5 mt-1 border border-gray-300 rounded focus:border-primary focus:outline-none focus:ring-0',
          props.className,
        )}
      />
    </label>
  );
}

Input.defaultProps = {
  type: 'text',
};
