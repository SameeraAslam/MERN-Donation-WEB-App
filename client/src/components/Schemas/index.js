import * as Yup from "yup";
export const SignUp = Yup.object({
  name: Yup.string().min(4).max(15).required("Please Enter your name."),
  lname: Yup.string().min(4).max(15).required("Please Enter your last name."),
  email: Yup.string().email().required("Please Enter your Email."),
  pass: Yup.string().min(5).max(20).required("Please Enter Password."),
});
