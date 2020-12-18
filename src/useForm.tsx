import { useState } from 'react';

const useForm = (validate: any) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors(validate(values));
    // console.log(`Errors: ${JSON.stringify(validate(values))}`);
    // setValues({ username: '', email: '', password: '', password2: '' });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
