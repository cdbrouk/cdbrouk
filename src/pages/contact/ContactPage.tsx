import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/base/PageLayout';
import ContactTextBlock from '../../components/contact/ContactTextBlock';

const BackGround = styled.div`
  background-color: #909dc1;
  height: 100vh;
`;

interface ContactPageProps {
  id: string;
}

const ContactPage = ({ id }: ContactPageProps) => {
  return (
    <BackGround>
      <PageLayout id={id}>
        <ContactTextBlock />
      </PageLayout>
    </BackGround>
  );
};

export default ContactPage;