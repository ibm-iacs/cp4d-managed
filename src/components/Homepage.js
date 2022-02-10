import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon2.jpg';

const FirstLeftText = () => <p>IBM Managed Service</p>;

const FirstRightText = () => (
  <p>
    We take care of the day-to-day operations and allow you to focus on the core business.

    <a href="https://github.com/ibm-iacs/cp4d-managed/blob/5fe12de31bb19fbfa2cab7c69cd942f55aa06f79//src/gatsby-theme-carbon/templates/Homepage.js">

    </a>
    <a
      className={calloutLink}
      href="/cp4d-managed/IEL-About-us">
      About US →
    </a>
  </p>
);

const SecondLeftText = () => <p>We deliver peace of mind</p>;

const SecondRightText = () => (
  <p>
  Bring the hands-on skills and deep expertise of IBM Essential Management
  to your business, when and where you need it.
    <a
      className={calloutLink}
      href="/cp4d-managed/IACS-Offering">
      Checkout our offerings →
    </a>
  </p>
);

const BannerText = () => <h1>
</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
