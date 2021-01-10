import React from 'react';
import { Icon, Table } from 'semantic-ui-react';

const TableComponent = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Keyboard</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>Mousepad</Table.Cell>
          <Table.Cell>
            <Icon name="checkmark" />
            Approved
          </Table.Cell>
          <Table.Cell>Sent</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Headset</Table.Cell>
          <Table.Cell>Unknown</Table.Cell>
          <Table.Cell negative>
            <Icon name="close" />
            Requires warranty
          </Table.Cell>
        </Table.Row>
        <Table.Row negative>
          <Table.Cell>RTX 3090</Table.Cell>
          <Table.Cell>No stock</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TableComponent;