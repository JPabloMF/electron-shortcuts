import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const CardComponent = () => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>Products</Card.Header>
          <Card.Meta>Jan 16</Card.Meta>
          <Card.Description>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Open
            </Button>
            <Button basic color="red">
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Clients</Card.Header>
          <Card.Meta>Jan 15</Card.Meta>
          <Card.Description>
            Bring to the table win-win survival strategies to ensure proactive
            domination.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Open
            </Button>
            <Button basic color="red">
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default CardComponent;