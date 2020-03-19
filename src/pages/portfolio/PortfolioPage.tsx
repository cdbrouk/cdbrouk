import React from 'react';
import PageLayout from '../../components/base/PageLayout';
import PortFolioLayout from '../../components/portfolio/PortFolioLayout';
import { broukflix } from '../../components/portfolio/portFolioData';

interface PortfolioPageProps {
  id: string;
}

const PortfolioPage = ({ id }: PortfolioPageProps) => {
  return (
    <PageLayout id={id}>
      <PortFolioLayout
        title={broukflix.title}
        descript={broukflix.description}
        github={broukflix.github}
        url={broukflix.url}
      />
    </PageLayout>
  );
};

export default PortfolioPage;
