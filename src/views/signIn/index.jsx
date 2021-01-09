import { withFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { USER_MOCK, PASSWORD_MOCK } from '../../utils/constants';

import LoginComponent from './component';

const validationSchema = Yup.object().shape({
  user: Yup.string().required('User is required'),
  password: Yup.string().required('Password name is required'),
});

const validateUserOnSubmit = (values, history, setErrors) => {
  const { user, password } = values;

  if (user === USER_MOCK && password === PASSWORD_MOCK) {
    history.push('/dashboard');
  } else if (user !== USER_MOCK && password !== PASSWORD_MOCK) {
    setErrors({ user: 'User is wrong', password: 'Password is wrong' });
  } else if (user !== USER_MOCK) {
    setErrors({ user: 'User is wrong' });
  } else if (password !== PASSWORD_MOCK) {
    setErrors({ password: 'Password is wrong' });
  }
};

const Login = withFormik({
  validationSchema,
  validateOnChange: false,
  mapPropsToValues: () => ({ user: '', password: '' }),
  handleSubmit: (values, { setSubmitting, setErrors, props: { history } }) => {
    setSubmitting(false);
    validateUserOnSubmit(values, history, setErrors);
  },
  displayName: 'Login',
})(LoginComponent);

export default withRouter(Login);
