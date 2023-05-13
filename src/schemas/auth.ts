import * as yup from "yup";
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const nameRegex = /^[a-z ,.'-]+$/i;

const BasicCredsPattern = {
  email: yup
    .string()
    .required("auth.inputs.email.required")
    .email("auth.inputs.email.error"),
  password: yup
    .string()
    .required("auth.inputs.password.required")
    .matches(passwordRegex, "auth.inputs.password.error"),
};

export const LoginSchema = yup.object({
  email: yup
    .string()
    .required("auth.inputs.email.required")
    .email("auth.inputs.email.error"),
  password: yup.string().required("auth.inputs.password.required"),
});

export const SignUpSchema = yup.object({
  ...BasicCredsPattern,
  firstName: yup
    .string()
    .required("auth.inputs.firstName.required")
    .matches(nameRegex, "auth.inputs.firstName.error"),
  lastName: yup
    .string()
    .required("auth.inputs.lastName.required")
    .matches(nameRegex, "auth.inputs.lastName.error"),
});
