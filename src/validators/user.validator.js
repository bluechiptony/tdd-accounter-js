const yup = require('yup');

export const userCreateSchema = yup.object({
  userName: yup.string().required('Please enter your user name'),
  email: yup.string().required('Please enter your email address'),
  password: yup.string().required('Please enter your password'),
});
