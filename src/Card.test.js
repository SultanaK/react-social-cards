import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

const mockData = {
    id: 1,
    name: "Steve",
    imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
    age: 5,
    description: "Lorem ipsum dolor sit amet"
}

describe('<Card />', () => {

    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(
        <Card 
            id={mockData.id} 
            imageUrl={mockData.imageUrl}
            description={mockData.desciption}
            name={mockData.name}
            age={mockData.age}
        />, 
        div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected when passed props', () => {
        // Render the component, as JSON
        const tree = renderer.create(
        <Card 
            id={mockData.id} 
            imageUrl={mockData.imageUrl}
            description={mockData.desciption}
            name={mockData.name}
            age={mockData.age}
        />
        ).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot();  
    });

    it('renders UI as expected without props', () => {
        // Render the component, as JSON
        const tree = renderer.create(
        <Card />
        ).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot();  
    });
});