import React from 'react';
import { StyledMainContainer } from '../../../components/mainContainer/styles';
import Card from './components/card';
import Table from './components/table';

const Home = () => {
  return (
    <StyledMainContainer>
      <h1>WELCOME BACK ALEX</h1>
      <Card />
      <h2>LAST SAVED ITEMS</h2>
      <Table />
    </StyledMainContainer>
  );
};

export default Home;
