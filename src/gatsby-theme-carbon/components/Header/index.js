import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header {...props}>
    IBM-IACS&nbsp;<span> Cloud Pak For Data</span>
  </Header>
);

export default CustomHeader;
