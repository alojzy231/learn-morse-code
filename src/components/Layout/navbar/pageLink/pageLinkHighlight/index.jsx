import React from 'react';
import PropTypes from 'prop-types';

import { PageLinkHighlightContainer, Middle, Side } from './PageLinkHighlight.styles';

export default function PageLinkHighlight({ indexOfCurrentRoute }) {
  return (
    <PageLinkHighlightContainer indexOfCurrentRoute={indexOfCurrentRoute}>
      <Side />
      <Middle />
      <Side isBottom />
    </PageLinkHighlightContainer>
  );
}

PageLinkHighlight.propTypes = {
  indexOfCurrentRoute: PropTypes.number.isRequired,
};
