import React from "react";
import FormAll from './FormAll';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = this.initialState;
  }
  initialState = {
      step: 1,
      userInfo: { 
                  firstName: "",
                  lastName: "",
                  password: "",
                  passwordRepeat: "",
                  gender: "male",
                  email: "",
                  mobile: "",
                  countryID: "1",
                  cityID: "0",
                  userpic: ""
                },
      errors: {}
  };

  onChange = event => {
    let obj = {[event.target.name]: event.target.value };
    this.setState(
      prevState => (
       {userInfo: { ...prevState.userInfo, ...obj}}
      )
      );
  };

  onPrev = event => {
    event.preventDefault();
    if (this.state.step === 1) {
      console.log("load previous page");
    } else {
      this.setState(prevState => ({
        step: prevState.step - 1
      }));
    }
  };
  onReset = event => {
    event.preventDefault();
    this.setState(this.initialState);
  };

  getErrors = () => {
    let errors = {};
    let userInfo = this.state.userInfo,
     step = this.state.step;
     switch (step) {
      case 1:
        if (userInfo.firstName.length < 3) errors.firstName = "Required";
        if (userInfo.lastName.length < 3) errors.lastName = "Required";
        if(userInfo.password < 3) errors.password = "Required";
        if (userInfo.password !== userInfo.passwordRepeat) errors.passwordRepeat = "Required";
        break;
      case 2: 
      if(userInfo.email.length < 6 || !userInfo.email.match("@")) errors.email = "Required";
      if(userInfo.cityID === "0") errors.cityID = "Select city";
      if(userInfo.mobile.length !== 10 || !userInfo.mobile.match(/\d/g)) errors.mobile = "Invalid mobile";
      break;
      case 3 :
         if(!userInfo.userpic) errors.userpic = "Required";
         break;
      default : errors = {};
    }

    return errors;
  };

  onNext = event => {
    event.preventDefault();
    const errors = this.getErrors();
    if (Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      if (this.state.step === 4) {
        console.log(this.state);
      } else {
        this.setState(prevState => ({
          errors,
          step: prevState.step + 1
        }));
      }
    }
  };

  render() {
      
    return (<FormAll  {...this.state}
                      onPrev = {this.onPrev}
                      onNext = {this.onNext}
                      onReset= {this.onReset}
                      onChange={this.onChange} />
      )}
  }
