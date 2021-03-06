import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    &nbsp;<span>IBM Expert Labs</span>
  </Header>
);

export default CustomHeader;
