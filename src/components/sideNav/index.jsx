import React, { useState } from 'react';
import { Menu, Accordion, Icon, Button } from 'semantic-ui-react';
import { StyledButton } from './styles';

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (_, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Menu vertical>
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Inventory
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>Inventory</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Sales
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <StyledButton fluid>Calculator</StyledButton>
          <Button fluid>Consult product</Button>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Manager
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>Manager</p>
        </Accordion.Content>
      </Accordion>
    </Menu>
  );
};

export default SideNav;
