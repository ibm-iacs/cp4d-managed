import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>last buildTime</code> : {buildTime}
    </p>
    <p>
      <a href="https://ibm-iacs.github.io/cp4d-managed/why-dark">
        Why so dark here?
      </a>
    </p>
    <p>
       <strong>IBM Expert Labs - Managed Services</strong>
    </p>
    <p>
      Any issues with this webpage,
      Please contact : mohit.arora@in.ibm.com(TO BE UPDATED)
    </p>
    <p>
      <a href="https://www.ibm.com/products/expertlabs">
        IBM Expert Labs
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/support/pages/node/6204108', linkText: 'IBM Support Advantages' },
    { href: 'https://www.ibm.com/products/expertlabs/trustworthy-ai', linkText: 'Trustworthy AI' },
    { href: 'https://www.ibm.com/products/expertlabs/technical-account-management', linkText: 'Technical account management' },
  ],
  secondCol: [
    { href: 'https://www.ibm.com/products/expertlabs/managed-services', linkText: 'Managed Services' },
    { href: '/cp4d-managed/IEL-About-us', linkText: 'About Us' },
    { href: 'https://www.ibm.com/in-en/products/cloud-pak-for-data', linkText: 'IBM Cloud Pak for Data' },
    { href: 'https://www.ibm.com/it-infrastructure/us-en/resources/campaignmail/mail/Data-and-AI-Expert-Labs/', linkText: 'Contact an Expert' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
