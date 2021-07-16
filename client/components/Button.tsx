import React, { ReactElement, ReactNode } from 'react'
import classnames from "classnames";

interface Props {
  loading?: boolean,
  disabled?: boolean,
  label?: string | ReactElement<any>,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  Icon?: ReactNode,
  animateIcon?: boolean,
  style?: "primary" | "secondary",
}

export default function Button(props: Props): ReactElement {
  const buttonStyles = {
    primary: "bg-gray-900 text-white shadow hover:shadow-md",
    secondary: "text-gray-600 border border-gray-300 shadow-sm hover:shadow-md",
  }
  const animateIconClasses = "transition-all duration-200 group-hover:ml-3 group-hover:-mr-1"
  const Icon = props.Icon;
  return (
    <button className={classnames("transition-all duration-200 flex group items-center px-4 py-1.5 font-medium text-sm rounded-md", buttonStyles[props.style])} onClick={props.onClick}>
      {props.label}
      {Icon && <div className={classnames("ml-2 text-xl", { [animateIconClasses]: props.animateIcon})}>{Icon}</div>}
    </button>
  )
}

Button.defaultProps = {
  style: "primary"
}
