import React from 'react';
import HomeLayout from '../../components/home/HomeLayout';
import { AvatarIcon } from '../../static/svg';
import HomeIntro from '../../components/home/HomeIntro';

export interface HomePageProps {
  id: string;
}

const HomePage = ({ id }: HomePageProps) => {
  return (
    <HomeLayout id={id}>
      <AvatarIcon style={{ width: 270, height: 270 }} />
      <HomeIntro />
    </HomeLayout>
  );
};

export default HomePage;
