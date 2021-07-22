import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  label?: string | ReactElement<any>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  Icon?: ReactNode;
  animateIcon?: boolean;
  style?: 'primary' | 'secondary';
  size?: 'lg' | 'md' | 'sm';
  isFullWidth?: boolean;
  centerLabel?: boolean;
  type: 'button' | 'submit';
}

export default function Button(props: Props): ReactElement {
  const buttonStyles = {
    primary: 'bg-gray-900 text-white drop-shadow hover:drop-shadow-md',
    secondary:
      'text-muted hover:text-primary bg-white border border-gray-300 drop-shadow-sm',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  const animateIconClasses =
    'transition-all duration-200 group-hover:ml-3 group-hover:-mr-1';
  const Icon = props.Icon;
  return (
    <button
      className={classNames(
        'filter transition-all ease-in-out duration-200 flex group items-center px-4 py-1.5 font-medium text-sm rounded',
        { 'w-full': props.isFullWidth, 'justify-center': props.centerLabel },
        props.className,
        buttonStyles[props.style],
        sizeClasses[props.size],
      )}
      onClick={props.onClick}
      type={props.type}
    >
      {Icon && (
        <div
          className={classNames('mr-2', {
            [animateIconClasses]: props.animateIcon,
          })}
        >
          {Icon}
        </div>
      )}
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  style: 'primary',
  size: 'sm',
  type: 'button',
};
