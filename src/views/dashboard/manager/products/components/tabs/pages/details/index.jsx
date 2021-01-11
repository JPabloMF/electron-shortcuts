import React from 'react';
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

import { StyledButtonsContainer } from './styles';

const DetailsPage = () => {
  return (
    <StyledForm>
      <Form.Group widths="equal">
        <Form.Field control={Input} label="IVA" placeholder="IVA" />
        <Form.Field
          control={Input}
          label="Other taxes"
          placeholder="Other taxes"
        />
        <Form.Field
          control={Input}
          label="Minimum stock"
          placeholder="Minimum stock"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Maximum stock"
          placeholder="Maximum stock"
        />
        <Form.Field
          control={Input}
          label="Accounting account"
          placeholder="Accounting account"
        />
        <Form.Field control={Input} label="Image" placeholder="Image" />
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
        <Grid.Column>
          <Segment>
            <Table celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">Tags</Table.HeaderCell>
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

      <StyledButtonsContainer>
          <Button icon="add" content="Add" primary />
          <Button icon="trash" content="Clean" />
          <Button icon="minus" content="Remove element" basic />
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default DetailsPage;