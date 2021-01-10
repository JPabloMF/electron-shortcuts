import React from 'react';
import TopNav from '../../components/topNav';
import SideNav from '../../components/sideNav';

import ContentWrapper from '../../components/contentWrapper';

const Dashboard = () => {
  return (
    <div>
      <TopNav />
      <SideNav />
      <ContentWrapper />
    </div>
  );
};

export default Dashboard;