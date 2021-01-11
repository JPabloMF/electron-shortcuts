import React from 'react';
import { Tab } from 'semantic-ui-react';
import {StyledTabsContainer} from './styles';
import DetailsPage from './pages/details';
import UnitiesPage from './pages/unities';

const panes = [
  {
    menuItem: 'Details',
    render: () => (
      <Tab.Pane>
        <DetailsPage />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Unities',
    render: () => (
      <Tab.Pane>
        <UnitiesPage />
      </Tab.Pane>
    ),
  },
];

const Tabs = () => {
  return (
    <StyledTabsContainer>
      <Tab panes={panes} />
    </StyledTabsContainer>
  );
};

export default Tabs;