import React from 'react';
import { StyledMainContainer } from '../../../../components/mainContainer/styles';

import HeaderButtons from './components/headerButtons';
import HeaderForm from './components/headerForm';
import Tabs from './components/tabs';

const Products = () => {
  return (
    <StyledMainContainer>
      <h1>PRODUCTS</h1>
      <HeaderButtons />
      <HeaderForm />
      <Tabs />
    </StyledMainContainer>
  );
};

export default Products;