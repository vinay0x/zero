import React, { ReactElement } from 'react'
import Button from '@components/Button'
import { BsArrowRightShort } from "react-icons/bs";

export default function App(): ReactElement {
  return (
    <div className="inline-flex p-16 space-x-3">
      <Button label="Cancel" style="secondary"/>
      <Button animateIcon label="Submit" Icon={<BsArrowRightShort />} style="primary"/>
      
    </div>
  )
}
