import React, { useState } from 'react';
import '../App.css'


const Tooltip = ({ children, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getMessage = () => {
    switch (position) {
      case 'left':
        return 'Hovered over left';
      case 'right':
        return 'Hovered over right';
      case 'top':
        return 'Hovered over top';
      case 'bottom':
        return 'Hovered over bottom';
      default:
        return 'Hovered';
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <br/>
      {showTooltip && <div className='tooltip'>{getMessage()}</div>}
      <br/>
      {children}
    </div>
  );
};

const TooltipTarget = ({ children }) => {
  return <span>{children}</span>;
};

export { Tooltip, TooltipTarget };
