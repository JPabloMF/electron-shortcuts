import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';

import { StyledForm } from './styles';

const HeaderForm = () => {
  return (
    <StyledForm>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Product ID"
          placeholder="Product ID"
        />
        <Form.Field control={Input} label="Code" placeholder="Code" />
      </Form.Group>
      <Form.Field
        control={TextArea}
        rows={2}
        label="Description"
        placeholder="Tell us more about the product..."
      />
    </StyledForm>
  );
};

export default HeaderForm;
