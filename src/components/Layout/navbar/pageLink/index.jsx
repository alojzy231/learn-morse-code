import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import HomepageIcon from '../icons/HomepageIcon';
import InfoIcon from '../icons/InfoIcon';
import StyledPageLink from './PageLink.styles';

export default function PageLink({ href }) {
  let Icon;
  switch (href) {
    case '/info':
      Icon = InfoIcon;
      break;
    default:
      Icon = HomepageIcon;
  }

  return (
    <Link href={href} passHref>
      <StyledPageLink href>
        <Icon />
      </StyledPageLink>
    </Link>
  );
}

PageLink.propTypes = {
  href: PropTypes.string.isRequired,
};
