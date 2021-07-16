import React, { ReactElement } from 'react'
import Button from '@components/Button'

export default function App(): ReactElement {
  return (
    <div className="p-16">
      This works!
      <Button label="Hey!" />
    </div>
  )
}
