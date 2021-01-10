import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { StyledMenu, StyledLink } from './styles';
import isElectron from 'is-electron';

let electron;

if (isElectron()) {
  electron = window.require('electron');
}

const TopNav = () => {
  return (
    <StyledMenu>
      {isElectron() && (
        <Dropdown item text="File">
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => electron.remote.getCurrentWindow().close()}
            >
              Exit
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
      <Dropdown item text="Manager">
        <Dropdown.Menu>
          <Dropdown.Item>
            <StyledLink to="/dashboard/manager/products">Products</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink to="/dashboard/manager/companies">Companies</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink to="/dashboard/manager/customers">Customers</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink to="/dashboard/manager/providers">Providers</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text="Others">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <StyledLink to="/dashboard/manager/others/families">
                    Families
                  </StyledLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <StyledLink to="/dashboard/manager/others/iva">
                    IVA
                  </StyledLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <StyledLink to="/dashboard/manager/others/pallets">
                    Pallets
                  </StyledLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text="Parameters">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <StyledLink to="/dashboard/manager/parameters/company-configuration">
                    Company configuration
                  </StyledLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <StyledLink to="/dashboard/manager/parameters/consecutive">
                    Consecutive
                  </StyledLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Sales">
        <Dropdown.Menu>
          <Dropdown.Item>
            <StyledLink to="/dashboard/sales/make-sales">Make sales</StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink to="/dashboard/sales/return-on-sales">
              Returns on sales
            </StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink to="/dashboard/sales/sales-details">
              Sales details
            </StyledLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Inventories">
        <Dropdown.Menu>
          <Dropdown.Item>
            <StyledLink to="/dashboard/inventories/initial-inventory-entry">
              Initial inventory entry
            </StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink to="/dashboard/inventories/check-stocks">
              Check stocks
            </StyledLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Purchases">
        <Dropdown.Menu>
          <Dropdown.Item>
            <StyledLink to="/dashboard/purchases/make-purchases">
              Make purchases
            </StyledLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <StyledLink to="/dashboard/purchases/returns-on-purchases">
              Returns on purchases
            </StyledLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Tools">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Dropdown text="Skins">
              <Dropdown.Menu>
                <Dropdown.Item>Black</Dropdown.Item>
                <Dropdown.Item>White</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>Sign off</Dropdown.Item>
          <Dropdown.Item>Report designer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Window">
        <Dropdown.Menu>
          <Dropdown.Item>Cascade</Dropdown.Item>
          <Dropdown.Item>Horizontal alignment</Dropdown.Item>
          <Dropdown.Item>Vertical alignment</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item name="Help" />
    </StyledMenu>
  );
};
export default TopNav;