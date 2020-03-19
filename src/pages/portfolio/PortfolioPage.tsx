import React from 'react';
import PageLayout from '../../components/base/PageLayout';
import { AvatarIcon } from '../../static/svg';

interface PortfolioPageProps {
  id: string;
}

const PortfolioPage = ({ id }: PortfolioPageProps) => {
  return (
    <PageLayout id={id}>
      <AvatarIcon />
    </PageLayout>
  );
};

export default PortfolioPage;
