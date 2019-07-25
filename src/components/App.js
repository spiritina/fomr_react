import React from "react";
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

export default class App extends React.Component {
  constructor(){
    super()
    
    this.state = this.initialState
  }
  initialState = {
    step: 1,
    firstName: '',
    lastName: '',
    password:'',
    passwordRepeat:'',
    gender: 'male',
    email:'',
    mobile:'',
    country:'Ukraine',
    city:'Select city',
    userpic:'',
    errors:{
    }
  };
  onChangeUserpic = (event) => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({userpic: event.target.result})
    }
    reader.readAsDataURL(event.target.files[0]);
   
  }
  onChange = (event) =>{
    this.setState({[event.target.name]: event.target.value});
  }
  
  onPrev = (event) => {
      event.preventDefault();
      if (this.state.step===1) {
         console.log('load previous page')}else{
      let newStep = this.state.step;
      newStep--;
      this.setState({step: newStep});}
  }
  onReset = event =>{
    event.preventDefault();
    this.setState(this.initialState);
  }
   onNext = (event) => { 
    event.preventDefault();
    let newErrors = {};
    if (this.state.step===1&&this.state.firstName.length<3){newErrors.firstName = 'Required'};
    if (this.state.step===1&&this.state.lastName.length<3){newErrors.lastName = 'Required'};
    if (this.state.step===1&&this.state.password<3){newErrors.password = 'Required'};
    if (this.state.step===1&&this.state.password !== this.state.passwordRepeat){newErrors.passwordRepeat = 'Required'};
    if (this.state.step===2&&(this.state.email.length < 6 || !this.state.email.match('@'))){newErrors.email = 'Required'};
    if (this.state.step===2&&this.state.city==='Select city'){newErrors.city = 'Select city'};
    if (this.state.step===2&&(this.state.mobile.length !== 10 || !this.state.mobile.match(/\d/g))){newErrors.mobile = 'Invalid mobile'};
    if (this.state.step===3&&!this.state.userpic){newErrors.userpic = 'Required'};
    if(Object.keys(newErrors).length){
      this.setState({errors: newErrors})
    }else{
      if (this.state.step ===4){
        console.log (this.state) 
      } else{
        this.setState({errors: newErrors})
        let newStep = this.state.step;
        newStep++;
        this.setState({step: newStep});
      }
    }
  }
  

  render() {
    let form;
    if(this.state.step===1){
      form = <Form1 onChange={this.onChange} state={this.state} onNext={this.onNext} onPrev={this.onPrev}/>
    } else if (this.state.step===2){
      form = <Form2 onChange={this.onChange} state={this.state} onNext={this.onNext} onPrev={this.onPrev}/>
    } else if (this.state.step===3){
      form = <Form3 onChange={this.onChangeUserpic} state={this.state} onNext={this.onNext} onPrev={this.onPrev}/>
    } else if (this.state.step===4){
      form = <Form4 onChange={this.onChangeUserpic} state={this.state} onReset={this.onReset} onNext={this.onNext} onPrev={this.onPrev}/>}
    return (
      <div className="form-container card">
        {form}
      </div>
    );
  }
}
