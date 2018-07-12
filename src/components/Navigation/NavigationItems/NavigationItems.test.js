import React from 'react';

// shallow renders only the root component and uses placeholders for the nested components therefore "shallowly renders a component"
import { configure, shallow } from 'enzyme';

// To configure enzyme and connect to react version
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// configures the enzyme library with the version of react being used. In this case the Adapter is for react-16
configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
	let wrapper;

	// Create a default instance for every test
	beforeEach(() => {
		// use enzyme to make the components isolated for unit testing
		// Create an instance of the testing component
		wrapper = shallow(<NavigationItems />);
	});

	it('Should render two <NavigationItem /> elements if NOT authenticated', () => {
		// check how many NavigationItem components are being rendered if not authenticated...
		wrapper.setProps({ isAuthenticated: false });
		// expect is globally available by Jest.
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});

	it('Should render three <NavigationItem /> elements if IS authenticated', () => {
		wrapper.setProps({ isAuthenticated: true });
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
	});

	it('Should render exact Logout Button if IS authenticated', () => {
		wrapper.setProps({ isAuthenticated: true });
		expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
	});
});
