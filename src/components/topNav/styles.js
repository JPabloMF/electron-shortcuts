import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  right: 0;
  && {
    width: calc(100% - 210px);
    border-radius: 0;
  }
`;