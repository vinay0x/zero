import React, { ReactElement } from 'react'
import Button from '@components/Button'
import { BsArrowRightShort } from "react-icons/bs";

export default function App(): ReactElement {
  return (
    <div className="p-16">
      This works!
      <Button label="Submit" Icon={<BsArrowRightShort />} />
    </div>
  )
}
