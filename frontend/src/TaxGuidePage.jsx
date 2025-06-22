import React from 'react';
import Calculate from './Calculate';
import ChatBot from './ChatBot';
import { CgOverflow } from 'react-icons/cg';

const TaxGuidePage = () => {
  const containerStyle = {
    width: '100%',
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  };

  const leftPaneStyle = {
    flex: 1,
    height: '100%',
    overflowY: 'auto', 
    background: 'linear-gradient(to bottom, #1f2c3e, #0d1a2b)',
  };

  const rightPaneStyle = {
    flex: 1,
    height: '100%',
    overflow: 'hidden', 
    background: 'linear-gradient(to bottom, #1f2c3e, #0d1a2b)',
  };

  return (
    <div style={containerStyle}>
      <div style={leftPaneStyle}>
        <Calculate />
      </div>
      <div style={rightPaneStyle}>
        <ChatBot />
      </div>
    </div>
  );
};

export default TaxGuidePage;
