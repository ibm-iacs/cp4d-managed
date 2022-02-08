import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/components/markdown', text: 'Markdown' },
  { href: '/components/Aside', text: 'Aside' },
  { href: '/components/demo', text: 'Demo' },
  { href: '/components/demo_mohita', text: 'Demo_mohita' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
