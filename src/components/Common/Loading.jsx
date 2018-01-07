import React from 'react';
import { alignCenterWrapper as LoadingWrapperStyle } from '@data/style';

/**
 * [Loading 组件]
 */
const Loading = () => (
  <div
    style={{ ...LoadingWrapperStyle }}
  >
    <div>
      loading...
    </div>
    <span style={{ paddingTop: '20px' }}>数据加载中。。。</span>
  </div>
);

export default Loading;
