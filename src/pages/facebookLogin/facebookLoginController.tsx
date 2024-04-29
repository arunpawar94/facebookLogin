import React, { Component, ChangeEvent } from "react";

interface States {
  [key: string]: string | boolean;
  isCardHover: boolean;
  isVisible: boolean;
  email: string;
  password: string;
  checkEmail: boolean;
  checkPassword: boolean;
  isModalOpen: boolean;
  emailError: string;
  passwordError: string;
}

type Props = {
  classes: Record<string, string>;
};
export default class VideoPreviewController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isCardHover: false,
      isVisible: false,
      email: "",
      password: "",
      checkEmail: false,
      checkPassword: false,
      isModalOpen: false,
      emailError: "",
      passwordError: "",
    };
  }
  mouseEnterFunction = () => {
    this.setState({ isCardHover: true });
  };
  mouseLeaveFunction = () => {
    this.setState({ isCardHover: false });
  };
  handlePasswordVisible = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };
  handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    // Remove spaces from the input value
    const sanitizedValue = event.target.value.replace(/\s/g, "");

    // Set state only if the value doesn't contain spaces
    if (sanitizedValue !== event.target.value) {
      event.target.value = sanitizedValue;
      return;
    }

    await this.setState({ [event.target.name]: sanitizedValue });

    if (event.target.name === "email") {
      this.checkEmail();
    } else {
      this.checkPassword();
    }
  };
  handleSubmit = () => {
    this.checkEmail();
    this.checkPassword();
    if (this.state.checkEmail && this.state.checkPassword) {
      console.log(this.state.email, this.state.password);
      this.setState({ isModalOpen: true });
    }
  };
  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
      checkEmail: false,
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    });
  };

  checkEmail = () => {
    let validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    switch (true) {
      case this.state.email.length === 0:
        this.setState({ emailError: "* Email is required", checkEmail: false });
        break;
      case !validRegex.test(this.state.email):
        this.setState({ emailError: "* Email is invalid", checkEmail: false });
        break;
      default:
        this.setState({ emailError: "", checkEmail: true });
        break;
    }
  };
  checkPassword = () => {
    let validUpperCase = /.*[A-Z].*/;
    let validLowerCase = /.*[a-z].*/;
    let validNumber = /.*[0-9].*/;
    let validSpecialCharacter = /.*[\W_].*/;
    switch (true) {
      case this.state.password.length === 0:
        this.setState({
          passwordError: "* Password is required",
          checkPassword: false,
        });
        break;
      case this.state.password.length < 8:
        this.setState({
          passwordError: "* Password must have 8 character long",
          checkPassword: false,
        });
        break;
      case !validUpperCase.test(this.state.password):
        this.setState({
          passwordError: "* Password must have at least one uppercase letter",
          checkPassword: false,
        });
        break;
      case !validLowerCase.test(this.state.password):
        this.setState({
          passwordError: "* Password must have at least one lower letter",
          checkPassword: false,
        });
        break;
      case !validNumber.test(this.state.password):
        this.setState({
          passwordError: "* Password must have at least one digit",
          checkPassword: false,
        });
        break;
      case !validSpecialCharacter.test(this.state.password):
        this.setState({
          passwordError:
            "* Password must have at least one special character (eg. @,! etc)",
          checkPassword: false,
        });
        break;
      default:
        this.setState({ passwordError: "", checkPassword: true });
        break;
    }
  };
}
