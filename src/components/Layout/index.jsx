import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import { LayoutWrapper, Main } from './Layout.styles';

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
