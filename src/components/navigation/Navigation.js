'use client';

import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import {
  User as User,
  Upload as Upload,
  Fork as Fork,
} from '@carbon/icons-react';

export default function Navigation() {
  return (
    <>
      <SideNav aria-label="Side navigation" isRail>
        <SideNavItems>
          <SideNavLink renderIcon={Upload} href="/uploads">
            Upload
          </SideNavLink>
          <SideNavLink renderIcon={User} href="/profile">
            Profile
          </SideNavLink>
          <SideNavLink renderIcon={Fork} href="/main">
            Home
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </>
  );
}
