import SideTabs from '@components/Common/SideTabs';
import React, { ReactElement } from 'react';

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <SideTabs title="Settings"></SideTabs>
    </div>
  );
}
