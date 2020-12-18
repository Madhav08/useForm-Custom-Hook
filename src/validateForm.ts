interface Error {
  username: string;
  email: string;
  password: string;
  password2: string;
}

export default function validateForm(values: any) {
  let errors: Error = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };
  // Validate name
  console.log('value in validaion' + values.username);
  if (!values.username) {
    errors.username = 'Please Enter your Name';
  }

  //   Validate Email
  if (!values.email) {
    errors.email = 'Please Enter your Email';
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      values.email
    )
  ) {
    errors.email = 'Please Enter a Valid Email';
  }

  //   Validate Password
  if (!values.password) {
    errors.password = 'Password is Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password length must be 6 or greater';
  }

  if (!values.password2) {
    errors.password2 = 'Please Re-Enter the Password';
  } else if (values.password !== values.password2) {
    errors.password2 = 'Re-Enter Password Should Match Password Entered Above';
  }
  return errors;
}
