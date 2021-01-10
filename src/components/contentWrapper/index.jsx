import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../../views/dashboard/home';

import Products from '../../views/dashboard/manager/products';
import Companies from '../../views/dashboard/manager/companies';
import Customers from '../../views/dashboard/manager/customers';
import Providers from '../../views/dashboard/manager/providers';
import Families from '../../views/dashboard/manager/others/families';
import Iva from '../../views/dashboard/manager/others/iva';
import Pallets from '../../views/dashboard/manager/others/pallets';
import CompanyConfiguration from '../../views/dashboard/manager/parameters/companyConfiguration';
import Consecutive from '../../views/dashboard/manager/parameters/consecutive';

import MakeSales from '../../views/dashboard/sales/makeSales';
import ReturnOnSales from '../../views/dashboard/sales/returnsOnSales';
import SalesDetails from '../../views/dashboard/sales/salesDetails';

import InitialInventoryEntry from '../../views/dashboard/inventories/initialInventoryEntry';
import CheckStocks from '../../views/dashboard/inventories/checkStocks';

import MakePurchases from '../../views/dashboard/purchases/makePurchases';
import ReturnsOnPurchases from '../../views/dashboard/purchases/returnsOnPurchases';

const StyledRouter = styled.div`
  margin-left: 210px;
  width: calc(100% - 210px);
`;

const ContentWrapper = () => {
  return (
    <StyledRouter>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        {/* Manager */}
        <Route path="/dashboard/manager/products" component={Products} />
        <Route path="/dashboard/manager/companies" component={Companies} />
        <Route path="/dashboard/manager/customers" component={Customers} />
        <Route path="/dashboard/manager/providers" component={Providers} />
        <Route path="/dashboard/manager/others/families" component={Families} />
        <Route path="/dashboard/manager/others/iva" component={Iva} />
        <Route path="/dashboard/manager/others/pallets" component={Pallets} />
        <Route path="/dashboard/manager/parameters/company-configuration" component={CompanyConfiguration} />
        <Route path="/dashboard/manager/parameters/consecutive" component={Consecutive} />
        {/* Sales */}
        <Route path="/dashboard/sales/make-sales" component={MakeSales} />
        <Route path="/dashboard/sales/return-on-sales" component={ReturnOnSales} />
        <Route path="/dashboard/sales/sales-details" component={SalesDetails} />
        {/* Invetories */}
        <Route path="/dashboard/inventories/initial-inventory-entry" component={InitialInventoryEntry} />
        <Route path="/dashboard/inventories/check-stocks" component={CheckStocks} />
        {/* Purchases */}
        <Route path="/dashboard/purchases/make-purchases" component={MakePurchases} />
        <Route path="/dashboard/purchases/returns-on-purchases" component={ReturnsOnPurchases} />
      </Switch>
    </StyledRouter>
  );
};

export default ContentWrapper;
