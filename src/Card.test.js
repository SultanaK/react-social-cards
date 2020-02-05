import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
    it('renders without crashing without props', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Card />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing when passed props', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Card imageUrl="https://image.com" name="Todd" age={5} description="Lorem ipsum" />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders markup as expected without props', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/Card.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });

    it('renders markup as expected WITH props', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Card imageUrl="https://image.com" name="Todd" age={5} description="Lorem ipsum" />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/Card.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});