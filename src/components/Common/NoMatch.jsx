import React from 'react';

const containerStyle = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  paddingTop: '120px',
};

const NotMatch = () => (
  <div style={containerStyle}>
    <div style={{ display: 'flex' }}>
      <h1 style={{ fontSize: '50px' }}>404 错误页面</h1>
    </div>
  </div>
);

export default NotMatch;
