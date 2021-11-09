import React from 'react';
import { useRouter } from 'next/router';

import { NavbarContainer, NavbarWrapper } from './Navbar.styles';
import ROUTES from '../../../consts/routes';
import PageLink from './pageLink';
import PageLinkHighlight from './pageLink/pageLinkHighlight';

export default function Navbar() {
  const router = useRouter();
  const routes = Object.values(ROUTES);
  const indexOfCurrentRoute = routes.indexOf(router.pathname);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        {routes.map((route) => (
          <PageLink href={route} key={route} />
        ))}

        <PageLinkHighlight indexOfCurrentRoute={indexOfCurrentRoute} />
      </NavbarWrapper>
    </NavbarContainer>
  );
}
