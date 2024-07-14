import React from 'react';
import { faker } from '@faker-js/faker';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import DashBoard from './DashBoard';

faker.seed(1);

describe('<DashBoard/> component', () => {
test('renders component', () => {
let renderer: ReactTestRenderer;

act(() => {
renderer = create(<DashBoard />);
});

expect(renderer!.toJSON()).toMatchSnapshot('Initial');
});
});
