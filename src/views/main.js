import React from 'react';
import TopNav from '../components/topNav';
import SideNav from '../components/sideNav';

import styled from 'styled-components';

const StyledNavContainer = styled.div`
  /* display: flex; */
`;

const Main = () => {
  return (
    <StyledNavContainer>
      <TopNav />
      <SideNav />
    </StyledNavContainer>
  );
}

export default Main;