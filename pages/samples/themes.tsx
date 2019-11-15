import React from 'react';
import { NextPage } from 'next';

import { Layout } from '../../components';

interface Props {}

const Themes: NextPage<Props> = () => (
  <Layout title="Theme">
    <div>Theme</div>
  </Layout>
);

export default Themes;