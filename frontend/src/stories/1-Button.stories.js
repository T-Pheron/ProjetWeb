import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Théric la brique</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

import { Container, Row, Col } from 'react-bootstrap';


export const theric = () => (
  <Container className="widgetTemperature">
    <Row lg md xs="4">
      <Col xs="12" md lg="4">pk pas</Col>
      <Col xs="12" md lg="4">non</Col>
      <Col xs="12" md lg="4">oui</Col>
    </Row>
  </Container>
);
