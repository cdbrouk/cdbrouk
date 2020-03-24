import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import MainResponsive from './MainResponsive';
import { Logo } from '../../static/svg';
import media from '../../lib/styles/media';

export interface MainHeaderProps {}

const Block = styled.div`
  width: 100%;
`;

const Inner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.small} {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const FloatInner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.small} {
    flex-direction: column;
  }
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
  ${media.small} {
    margin-left: 0;
    margin-right: 0.5rem;
  }
`;

export const FloatingHeaderComponent = (props: MainHeaderProps) => {
  return (
    <Block>
      <FloatInner>
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
      </FloatInner>
    </Block>
  );
};

const MainHeader = (props: MainHeaderProps) => {
  return (
    <Block>
      <Inner>
        <Link to="#home" smooth>
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
