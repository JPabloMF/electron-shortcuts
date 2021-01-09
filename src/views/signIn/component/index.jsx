import React from 'react';

import { Input, Button } from 'semantic-ui-react';
import {
  StyledForm,
  StyledErrorText,
  StyledInputContainer,
  StyledButtonContainer,
} from './styles';

const electron = window.require('electron');

const LoginComponent = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputContainer>
        <label htmlFor="user">User</label>
        <Input
          value={values.user}
          placeholder="User"
          name="user"
          onChange={handleChange}
          error={errors.user ? true : false}
        />
        {errors.user && <StyledErrorText>{errors.user}</StyledErrorText>}
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="password">Password</label>
        <Input
          value={values.password}
          placeholder="Password"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
        />
        {errors.password && (
          <StyledErrorText>{errors.password}</StyledErrorText>
        )}
      </StyledInputContainer>
      <StyledButtonContainer>
        <Button primary type="submit">
          Sign In
        </Button>
        <Button onClick={() => electron.remote.getCurrentWindow().close()}>
          Exit
        </Button>
      </StyledButtonContainer>
    </StyledForm>
  );
};

export default LoginComponent;
