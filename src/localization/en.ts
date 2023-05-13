export default {
  auth: {
    login: {
      title: "Sign In to Jobiz",
      question: "Don't have an account?",
      redirect: "Create an Account",
      submit: "Sign In",
      forgotPassword: "Forgot password?",
      google: "Sign In with Google",
    },
    signUp: {
      title: "Welcome to Jobiz",
      question: "Already have an account?",
      redirect: "Sign In",
      submit: "Sign Up",
      google: "Sign Up with Google",
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
        required: "Password required",
        error:
          "Password should be from 6 to 16 characters, including 1 upper, 1 lowercase letter, 1 special character & 1 digit",
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
    thumbnail: {
      title: "Welcome to Jobiz",
      info: "Find your perfect match for job",
    },
  },
  general: {
    with: "with",
  },
};
