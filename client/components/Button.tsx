import React, { ReactElement, ReactNode } from 'react'
import classnames from "classnames";

interface Props {
  loading?: boolean,
  disabled?: boolean,
  label?: string | ReactElement<any>,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  Icon?: ReactNode,
  style: "primary" | "secondary"
}

export default function Button(props: Props): ReactElement {
  const buttonStyles = {
    primary: "bg-gray-900 text-white",
    secondary: "bg-white text-gray-900 border-gray-400"
  }
  const Icon = props.Icon;
  return (
    <button className={classnames("flex items-center px-4 py-1.5 text-sm rounded-md shadow", buttonStyles[props.style])} onClick={props.onClick}>
      {props.label}
      {Icon && <div className="ml-2 text-xl">{Icon}</div>}
    </button>
  )
}

Button.defaultProps = {
  style: "primary"
}
