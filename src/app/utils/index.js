export const userRegistrationFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Please enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    componentType: "input",
    type: "password",
  },
];

export const userLoginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    componentType: "input",
    type: "password",
  },
];

export const initialSignUpFormData = {
  userName: "",
  email: "",
  password: "",
};

export const initialLoginFormData = {
  email: "",
  password: "",
};
