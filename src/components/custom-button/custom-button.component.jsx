import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({click}) => (
  <button
    className={`custom-button`}
    onClick={click}
  >
    Delete
  </button>
);

export default CustomButton;
