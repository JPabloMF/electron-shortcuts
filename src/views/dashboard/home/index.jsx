import React from 'react';
import { StyledContainer } from './styles';
import Card from './components/card';
import Table from './components/table';

const Home = () => {
  return (
    <StyledContainer>
      <h1>WELCOME BACK ALEX</h1>
      <Card />
      <h2>LAST SAVED ITEMS</h2>
      <Table />
    </StyledContainer>
  );
};

export default Home;
