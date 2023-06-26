import React from 'react';

const PageButton = ({ isBold, name }) => {
  return (
    <div className="btn">
      <span className={isBold ? 'pageButtonBold hoverBold' : 'hoverBold'}>
        {name}
      </span>
    </div>
  );
};

export default PageButton;
