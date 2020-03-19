import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import MainHeader from '../components/main/MainHeader';
import HomePage from './home/HomePage';

const MainPage = () => {
  return (
    <MainTemplate>
      <MainHeader />
      <HomePage id="/" />
    </MainTemplate>
  );
};

export default MainPage;
