import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='text-center' style={{ margin: 'auto' }}>
            <Card style={{ width: '80rem' }}>
                <Card.Header>Answers</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>i.Uncontrolled components in React are components where the form data is handled by the DOM, while controlled components are components where the form data is handled by the React component state. In other words, uncontrolled components rely on the browser to manage and store form data, while controlled components rely on React to manage and store form data.</ListGroup.Item>
                    <ListGroup.Item>ii.PropTypes is a utility library in React used to validate the data types of props passed to a component. It allows developers to check if a prop is of the correct data type before rendering a component, reducing the risk of bugs and errors. PropTypes can be used by importing it from the 'prop-types' library and defining the data types expected for each prop.</ListGroup.Item>
                    <ListGroup.Item>ii.Node.js is a runtime environment for executing JavaScript code outside the browser, while Express.js is a framework built on top of Node.js that simplifies the process of building web applications. Node.js allows developers to write server-side JavaScript code, while Express.js provides a set of tools and features to create web servers and handle HTTP requests.</ListGroup.Item>
                    <ListGroup.Item>iv.A custom hook is a reusable function in React that can be used to share logic between components. It allows developers to extract common logic from components and use them across multiple components, making code more modular and easier to maintain. Custom hooks can be created to handle tasks such as fetching data from APIs, managing state, or handling side effects.</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    );
};

export default Blog;
