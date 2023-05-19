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
    forgotPassword: {
      title: "Restore your password",
      header: "Enter your email",
      info: "so we can send you a restoration link",
      submit: "Send a reset link",
    },
    errors: {
      general: "Something went wrong",
      notFound: "No user found with such credentials",
      alreadyUsed: "Email already in use",
    },
  },
  onboarding: {
    title: "Setup your account",
    info: "Complete the questionnaire, you can update that data later in settings",
    profileType: {
      header: "Select your profile type",
      employer: {
        type: "Employer",
        info: "You want to find a suitable candidate for your project/position",
      },
      employee: {
        type: "Employee",
        info: "Your goal is to find a perfect job and career opportunities",
      },
    },
    employee: {
      locationType: "Select your preferred work location",
      jobType: "What types of job you're looking for?",
      jobCategory: "You're specialized in:",
    },
    employer: {
      type: "Which type of employer are you?",
      company: {
        title: "Please select your company",
        position: "What is your position in this company?",
        question: "Haven't found your company?",
        redirect: "You can create a brand new company profile",
      },
    },
    createCompany: {
      title: "Create a company profile",
      name: {
        label: "Company name",
        placeholder: "Enter company name",
      },
      employees: {
        label: "How big is your company?",
      },
      logo: {
        label: "Upload your company logo here",
      },
    },
  },
  general: {
    with: "with",
    confirm: "Confirm",
  },
};
