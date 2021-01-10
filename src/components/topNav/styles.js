import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  && {
    width: calc(100% - 210px);
    border-radius: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
  }
`;