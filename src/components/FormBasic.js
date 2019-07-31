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
  let className = cx({
    basic: true,
    invalid: this.props.errors[name]
  });
  return className
}

    render(){
      let userInfo = this.props.userInfo;
      let errors = this.props.errors;
        return(
            
          <div className='content'>
                <Field labelText='First name'
                       type="text"
                       className={this.setClassName('firstName')}
                       placeholder="Enter first name"
                       name='firstName'
                       onChange={this.props.onChange}
                       value={userInfo.firstName}
                       error={errors.firstName}
                />
                <Field labelText='Last name'
                       type="text"
                       className={this.setClassName('lastName')}
                       placeholder="Enter last name"
                       name='lastName'
                       onChange={this.props.onChange}
                       value={userInfo.lastName}
                       error={errors.lastName}
                />
                <Field labelText='Passwors'
                       type="password"
                       className={this.setClassName('password')}
                       placeholder="Enter password"
                       name='password'
                       onChange={this.props.onChange}
                       value={userInfo.password}
                       error={errors.password}
                />
                <Field labelText='Repeat passwors'
                       type="password"
                       className={this.setClassName('passwordRepeat')}
                       placeholder="Repeat password"
                       name='passwordRepeat'
                       onChange={this.props.onChange}
                       value={userInfo.passwordRepeat}
                       error={errors.passwordRepeat}
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
                checked={userInfo.gender==='male'}/>
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
              checked={userInfo.gender==='female'}
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