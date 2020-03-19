import React from 'react';
import styled from 'styled-components';
import AboutBackGround from '../../components/about/AboutBackGround';
import PageLayout from '../../components/base/PageLayout';
import aboutText from '../../components/about/aboutText';

interface AboutPageProps {
  id: string;
}

const Intro = styled.p`
  font-weight: 100;
  font-size: 1.2rem;
  color: white;
  align-self: center;
  text-align: center;
  white-space: pre-line;
`;

const AboutPage = ({ id }: AboutPageProps) => {
  return (
    <AboutBackGround>
      <PageLayout id={id}>
        <Intro>{aboutText}</Intro>
      </PageLayout>
    </AboutBackGround>
  );
};

export default AboutPage;
