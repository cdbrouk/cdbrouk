import React from 'react';
import styled from 'styled-components';
import MainResponsive from './MainResponsive';

export interface MainHeaderProps {}

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Home = styled.h1`
  font-size: 1.5rem;
`;

const RightMenu = styled.h1`
  font-size: 1.5rem;
`;

const MainHeader = (props: MainHeaderProps) => {
  return (
    <Block>
      <Inner>
        <Home>Home</Home>
        <Right>
          <RightMenu>Second</RightMenu>
          <RightMenu>Third</RightMenu>
        </Right>
      </Inner>
    </Block>
  );
};

export default MainHeader;
