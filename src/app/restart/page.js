'use client';

import React from 'react';
import { Content } from '@carbon/react';
import { useDispatch, revertAll } from '@/lib/redux';

function RestartPage() {
  const dispatch = useDispatch();
  dispatch(revertAll());

  return (
    <Content>
      <span>Reset UI Cache...Done.</span>
    </Content>
  );
}

export default RestartPage;
