import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import MainHeader from '../components/main/MainHeader';
import HomePage from './home/HomePage';
import PortfolioPage from './portfolio/PortfolioPage';
import ContactPage from './contact/ContactPage';
import AboutPage from './about/AboutPage';

const MainPage = () => {
  return (
    <MainTemplate>
      <MainHeader />
      <HomePage id="/" />
      <PortfolioPage id="portfolio" />
      <AboutPage id="about" />
      <ContactPage id="contact" />
    </MainTemplate>
  );
};

export default MainPage;
