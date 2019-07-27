import React from  'react';
import classNames from 'classnames/bind';
import Field from './Field';

let styles = {
  basic: 'form-control',
  invalid: 'invalid'
}
let cx = classNames.bind(styles);
class FormBasic extends React.Component{
setClassName = name =>{
  let classNameFirstName = cx({
    basic: true,
    invalid: this.props.errors[name]
  });
  return classNameFirstName
}
    render(){
        return(
            
          <div className='content'>
                <Field labelText='First name'
                       type="text"
                       className={this.setClassName('firstName')}
                       placeholder="Enter first name"
                       name='firstName'
                       onChange={this.props.onChange}
                       value={this.props.userInfo.firstName}
                       error={this.props.errors.firstName}
                />
                <Field labelText='Last name'
                       type="text"
                       className={this.setClassName('lastName')}
                       placeholder="Enter last name"
                       name='lastName'
                       onChange={this.props.onChange}
                       value={this.props.userInfo.lastName}
                       error={this.props.errors.lastName}
                />
                <Field labelText='Passwors'
                       type="password"
                       className={this.setClassName('password')}
                       placeholder="Enter password"
                       name='password'
                       onChange={this.props.onChange}
                       value={this.props.userInfo.password}
                       error={this.props.errors.password}
                />
                <Field labelText='Repeat passwors'
                       type="password"
                       className={this.setClassName('passwordRepeat')}
                       placeholder="Repeat password"
                       name='passwordRepeat'
                       onChange={this.props.onChange}
                       value={this.props.userInfo.passwordRepeat}
                       error={this.props.errors.passwordRepeat}
                />
          <fieldset className="form-group">
            <p>Gender</p>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="gender"
                value="male"
                id='male'
                onChange={this.props.onChange}
                checked={this.props.userInfo.gender==='male'}/>
              <label 
              className="form-check-label" 
              htmlFor="male">Male</label>
            </div>
            <div className="form-check">
              <input 
              className="form-check-input" 
              type="radio" 
              name="gender" 
              value="female"
              id='female'
              onChange={this.props.onChange}
              checked={this.props.userInfo.gender==='female'}
              />
              <label 
              className="form-check-label" 
              htmlFor="female"
              >Female</label>
            </div>
          </fieldset>
          
          </div>
        )
    }

}

export default FormBasic;