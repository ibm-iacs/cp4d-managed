import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/ibm-iacs/cp4d-managed',
  },
  {
    title: 'Training',
    href: 'https://www.ibm.com/products/expertlabs/training',
  },
  {
    title: 'Managed Services',
    href: 'https://www.ibm.com/products/expertlabs/managed-services',
  },
  {
    title: 'Cloud Expert Services',
    href: 'https://www.ibm.com/analytics/globalelite/ibm-analytics-and-cloud-expert-services',
  },
  {
    title: 'Contact Us',
    href: 'https://www.ibm.com/it-infrastructure/us-en/resources/campaignmail/mail/Data-and-AI-Expert-Labs/',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
