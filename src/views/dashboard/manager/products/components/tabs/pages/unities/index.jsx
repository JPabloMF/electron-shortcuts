import React from 'react';
import HeaderButtons from '../../../headerButtons';
import { StyledForm } from '../../../headerForm/styles';
import {
  Form,
  Input,
  Grid,
  Segment,
  Table,
  Checkbox,
  Button,
} from 'semantic-ui-react';

const UnitiesPage = () => {
  return (
    <StyledForm>
      <HeaderButtons />
      <Form.Group widths="equal">
        <Form.Field control={Input} label="Name" placeholder="Name" />
        <Form.Field control={Input} label="Unity" placeholder="Unity" />
      </Form.Group>
      <Grid columns="equal">
        <Grid.Column>
          <Segment>
            <Table celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">Suppliers</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Checkbox label="NVIDIA" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Checkbox label="AMD" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Checkbox label="Asus" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid>
    </StyledForm>
  );
};

export default UnitiesPage;