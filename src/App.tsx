import React from 'react';
import GlobalStyles from './globalStyles';
import { Form, InputField, MainHeading, SubmitButton } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Form>
        <MainHeading>SignUp!</MainHeading>
        <InputField type='text' name='name' placeholder='Enter Your Name' />
        <InputField type='email' name='email' placeholder='Enter Your Email' />
        <InputField
          type='password'
          name='password'
          placeholder='Enter Password'
        />
        <InputField
          type='password'
          name='name'
          placeholder='Re-Enter Password'
        />
        <SubmitButton type='submit' value='SIGNUP!' />
      </Form>
    </>
  );
}

export default App;
