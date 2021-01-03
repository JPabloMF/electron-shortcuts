import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { StyledMenu } from './styles';

const TopNav = () => {
  return (
    <StyledMenu>
      <Dropdown item text="File">
        <Dropdown.Menu>
          <Dropdown.Item>Exit</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Manager">
        <Dropdown.Menu>
          <Dropdown.Item>Products</Dropdown.Item>
          <Dropdown.Item>Companies</Dropdown.Item>
          <Dropdown.Item>Customers</Dropdown.Item>
          <Dropdown.Item>Providers</Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text="Others">
              <Dropdown.Menu>
                <Dropdown.Item>Families</Dropdown.Item>
                <Dropdown.Item>IVA</Dropdown.Item>
                <Dropdown.Item>Pallets</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown text="Parameters">
              <Dropdown.Menu>
                <Dropdown.Item>Company configuration</Dropdown.Item>
                <Dropdown.Item>Consecutive</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Sales">
        <Dropdown.Menu>
          <Dropdown.Item>Make sales</Dropdown.Item>
          <Dropdown.Item>Returns on sales</Dropdown.Item>
          <Dropdown.Item>Sales details</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Inventories">
        <Dropdown.Menu>
          <Dropdown.Item>Initial inventory entry</Dropdown.Item>
          <Dropdown.Item>Check stocks</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item text="Purchases">
        <Dropdown.Menu>
          <Dropdown.Item>Make purchases</Dropdown.Item>
          <Dropdown.Item>Returns on purchases</Dropdown.Item>
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