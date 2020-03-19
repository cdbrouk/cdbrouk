import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../lib/styles/media';

const Block = styled.div`
  width: 1600px;
  margin-left: auto;
  margin-right: auto;
  ${mediaQuery(1919)} {
    width: 1600px;
  }
  ${mediaQuery(1440)} {
    width: 1195px;
  }
  ${mediaQuery(1312)} {
    width: 1088px;
  }
  ${mediaQuery(944)} {
    width: calc(100% - 2rem);
  }
  ${mediaQuery(767)} {
    width: calc(100% - 2rem);
  }
`;

export interface MainResponsiveProps {
  className?: string;
  children: React.ReactNode;
}

const MainResponsive = ({ className, children }: MainResponsiveProps) => {
  return <Block className={className}>{children}</Block>;
};

export default MainResponsive;
