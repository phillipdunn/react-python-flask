import React from 'react';
import { faker } from '@faker-js/faker';
import { act, create, ReactTestRenderer } from 'react-test-renderer';
import Table from './Table';
import { BrowserRouter } from 'react-router-dom';

faker.seed(1);

describe('<Table/> component', () => {
    test('renders component', () => {
        let renderer: ReactTestRenderer;

        act(() => {
            renderer = create(<BrowserRouter><Table rows={[]} /></BrowserRouter>);
        });

        expect(renderer!.toJSON()).toMatchSnapshot('Initial');
    });
});
