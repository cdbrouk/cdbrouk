import React from 'react';
import ReactMarkDown from 'react-markdown/with-html';
import styled from 'styled-components';
import AboutBackGround from '../../components/about/AboutBackGround';
import PageLayout from '../../components/base/PageLayout';
import aboutText from '../../components/about/aboutText';

interface AboutPageProps {
  id: string;
}

const Intro = styled.div`
  font-weight: 100;
  font-size: 1rem;
  color: white;
`;

const AboutPage = ({ id }: AboutPageProps) => {
  return (
    <AboutBackGround>
      <PageLayout id={id}>
        <Intro>
          <ReactMarkDown escapeHtml={false}>{aboutText}</ReactMarkDown>
        </Intro>
      </PageLayout>
    </AboutBackGround>
  );
};

export default AboutPage;
