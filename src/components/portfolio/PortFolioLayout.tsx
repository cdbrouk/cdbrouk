import React from 'react';
import styled from 'styled-components';
import optimizeImage from '../../lib/optimizeImage';
import { github32, broukflix } from '../../static/images';
import { mediaQuery } from '../../lib/styles/media';

interface PortFolioLayoutProps {
  title: string;
  descript: string;
  github: string;
  url: string;
}

const Block = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${mediaQuery(768)} {
    flex-direction: column-reverse;
    justify-content: center;
    height: 100vh;
    margin-bottom: 2rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 480px;
  height: 341px;
  ${mediaQuery(1440)} {
    width: 350px;
  }
  ${mediaQuery(1312)} {
    width: 325px;
  }
  ${mediaQuery(944)} {
    width: 236px;
  }
  ${mediaQuery(767)} {
    width: 190px;
  }
`;

const Image = styled.img`
  width: 960px;
  height: 560px;
  background-color: gray;
  ${mediaQuery(1440)} {
    width: 700px;
    height: 420px;
  }
  ${mediaQuery(1312)} {
    width: 650px;
    height: 377px;
  }
  ${mediaQuery(944)} {
    width: 472px;
    height: 270px;
  }
  ${mediaQuery(767)} {
    width: 380px;
    height: 220px;
  }
`;

const InfoTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const InfoDescript = styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  white-space: pre-line;
`;

const InfoLink = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LinkText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
`;

const PortFolioLayout = ({
  title,
  descript,
  github,
  url,
}: PortFolioLayoutProps) => {
  return (
    <Block>
      <Info>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescript>{descript}</InfoDescript>
        <InfoLink>
          <LinkItem href={github} target="_blank">
            <img
              src={optimizeImage(github32, 32)}
              alt="github"
              style={{ width: 32, height: 32, marginRight: 10 }}
            />
            <LinkText>Github</LinkText>
          </LinkItem>
          <LinkItem href={url} target="_blank">
            <LinkText>WebSite</LinkText>
          </LinkItem>
        </InfoLink>
      </Info>
      <Image src={optimizeImage(broukflix, 32)} alt={title} />
    </Block>
  );
};

export default PortFolioLayout;
