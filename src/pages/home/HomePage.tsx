import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import TestComponent from '../../components/home/TestComponent';
import MainHeader from '../../components/main/MainHeader';

const HomePage = () => {
  return (
    <MainTemplate>
      <MainHeader />
      <TestComponent color="#e8e8e8" />
      <TestComponent color="#3A6EE8" />
    </MainTemplate>
  );
};

export default HomePage;
