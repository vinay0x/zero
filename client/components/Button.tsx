import React, { ReactElement } from 'react'

interface Props {
  loading?: boolean,
  disabled?: boolean,
  label?: string | ReactElement<any>,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
  Icon?: ReactElement<any>,
}

export default function Button(props: Props): ReactElement {
  return (
    <button className="px-2 py-0.5 text-sm bg-gray-900 rounded text-white" onClick={props.onClick}>
      {props.label}
    </button>
  )
}
