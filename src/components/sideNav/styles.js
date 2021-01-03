import { Button, Menu, Accordion } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  && {
    margin-bottom: 15px;
  }
`;

export const StyledMenu = styled(Menu)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  && {
    margin: 0;
    border-radius: 0;
  }
`;

export const StyledAccordion = styled(Accordion)`
  &&& {
    border-radius: 0;
  }
`;
