import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  width: 100%;
`;

export interface MainResponsiveProps {
  className?: string;
  children: React.ReactNode;
}

const MainResponsive = ({ className, children }: MainResponsiveProps) => {
  return <Block className={className}>{children}</Block>;
};

export default MainResponsive;
