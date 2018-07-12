import React from 'react';
import { NavigationItem, StyledNavLink } from './NavigationItem.styled';

const navigationItem = ({ children, link, active, exact }) => (
	<NavigationItem>
		<StyledNavLink activeClassName="activated" exact={exact} to={link}>
			{children}
		</StyledNavLink>
	</NavigationItem>
);

export default navigationItem;
