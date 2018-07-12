import React from 'react';
import { NavigationItemsList } from './NavigationItems.styled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({ isAuthenticated }) => (
	<NavigationItemsList>
		<NavigationItem exact link="/">
			Burger Builder
		</NavigationItem>
		{isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}

		{isAuthenticated ? (
			<NavigationItem link="/logout">Logout</NavigationItem>
		) : (
			<NavigationItem link="/auth">Authentcate</NavigationItem>
		)}
	</NavigationItemsList>
);

export default navigationItems;
