import React from 'react';
import styled from 'styled-components';
import optimizeImage from '../../lib/optimizeImage';
import { github32, broukflix } from '../../static/images';

interface PortFolioLayoutProps {
  title: string;
  descript: string;
  github: string;
  url: string;
}

const Block = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 480px;
  height: 341px;
`;

const Image = styled.div`
  width: 960px;
  height: 560px;
  background-color: pink;
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
      <Image>
        <img src={optimizeImage(broukflix, 32)} alt={title} />
      </Image>
    </Block>
  );
};

export default PortFolioLayout;
