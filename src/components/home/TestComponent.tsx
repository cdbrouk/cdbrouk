import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${props => props.color};
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 1rem;
`;

export interface TestComponentProps {
  color: string;
  id: string;
}

const TestComponent = ({ color, id }: TestComponentProps) => {
  return (
    <Container color={color} id={id}>
      <Text>{color}</Text>
    </Container>
  );
};

export default TestComponent;
