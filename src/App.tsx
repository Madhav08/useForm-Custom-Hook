import React from 'react';
import GlobalStyles from './globalStyles';
import {
  Form,
  InputField,
  MainHeading,
  SubmitButton,
  ErrorText,
} from './styles';
import useForm from './useForm';
import validate from './validateForm';

function App() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <>
      <GlobalStyles />
      <Form onSubmit={handleSubmit}>
        <MainHeading>SignUp!</MainHeading>
        <InputField
          type='text'
          name='username'
          placeholder='Enter Your Name'
          onChange={handleChange}
          value={values.username}
        />
        {errors.username && <ErrorText>{errors.username}</ErrorText>}
        <InputField
          type='email'
          name='email'
          placeholder='Enter Your Email'
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <InputField
          type='password'
          name='password'
          placeholder='Enter Password'
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <InputField
          type='password'
          name='password2'
          placeholder='Re-Enter Password'
          onChange={handleChange}
          value={values.password2}
        />
        {errors.password2 && <ErrorText>{errors.password2}</ErrorText>}
        <SubmitButton type='submit' value='SIGNUP!' />
      </Form>
    </>
  );
}

export default App;
