import Button from '@components/Button';
import React, { ReactElement } from 'react';
import { logout as logoutAPI } from '@client/apis/auth';

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <Button label="Logout" onClick={(e) => logoutAPI()} />
    </div>
  );
}
