export default {
  auth: {
    login: {
      title: "Sign In to Jobiz",
      question: "Don't have an account?",
      redirect: "Create an Account",
      submit: "Sign In",
      forgotPassword: "Forgot password?",
    },
    signUp: {
      title: "Welcome to Jobiz",
      question: "Already have an account?",
      redirect: "Sign In",
      submit: "Sign Up",
    },
    inputs: {
      email: {
        label: "Email",
        placeholder: "Enter your email",
        error: "Invalid email",
        required: "Email required",
      },
      password: {
        label: "Password",
        placeholder: "Enter your password",
        error: "Invalid password",
        info: "Password should be from 6 to 16 characters, including 1 uppercase, 1 lowercase letters, 1 special character and 1 digit",
        required: "Password required",
      },
      firstName: {
        label: "First name",
        placeholder: "Enter your first name",
        error: "Invalid first name",
        required: "First name required",
      },
      lastName: {
        label: "Last name",
        placeholder: "Enter your last name",
        error: "Invalid last name",
        required: "Last name required",
      },
    },
  },
  general: {
    with: "with",
  },
};
