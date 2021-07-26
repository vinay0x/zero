import Input from '@components/Common/Input';
import Layout from '@components/Common/Layout';
import React, { ReactElement, useState } from 'react';

interface Props {}

export default function GeneralSettings({}: Props): ReactElement {
  const [name, setName] = useState('');
  return (
    <Layout title="General Settings">
      <div className="p-8 pt-0">
        <form className="w-1/3">
          <Input
            label="Company Name"
            placeholder="Acme Inc."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
    </Layout>
  );
}
