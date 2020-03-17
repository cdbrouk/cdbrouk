import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import MainResponsive from './MainResponsive';

export interface MainHeaderProps {}

const Block = styled.div`
  height: 4rem;
  position: fixed;
  z-index: 10;
  background: white;
  width: 100%;
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
  margin-right: 1rem;
`;

const MainHeader = (props: MainHeaderProps) => {
  return (
    <Block>
      <Inner>
        <Home>Home</Home>
        <Right>
          <Link
            to="#second"
            smooth
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <RightMenu>Second</RightMenu>
          </Link>
          <Link
            to="#third"
            smooth
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <RightMenu>Third</RightMenu>
          </Link>
        </Right>
      </Inner>
    </Block>
  );
};

export default MainHeader;
