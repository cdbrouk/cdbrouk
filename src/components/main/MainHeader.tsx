import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import MainResponsive from './MainResponsive';
import { Logo } from '../../static/svg';

export interface MainHeaderProps {}

const Block = styled.div`
  height: 108px;
  /* position: fixed;
  z-index: 10; */
  width: 100%;
  background-color: white;
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

const RightItem = styled.p`
  font-size: 1.5rem;
  margin-left: 1rem;
  font-weight: 100;
`;

const MainHeader = (props: MainHeaderProps) => {
  return (
    <Block>
      <Inner>
        <Link to="/">
          <Logo />
        </Link>
        <Right>
          <Link
            to="#portfolio"
            smooth
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <RightItem>PORTFOLIO</RightItem>
          </Link>
          <Link
            to="#about"
            smooth
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <RightItem>ABOUT</RightItem>
          </Link>
          <Link
            to="#contact"
            smooth
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <RightItem>CONTACT</RightItem>
          </Link>
        </Right>
      </Inner>
    </Block>
  );
};

export default MainHeader;
