import React from  'react';
import Field from './Field';
import Controls from './Controls';
import Steps from './Steps';
class Form1 extends React.Component{
    
    render(){
        return(
            
            <form className="form card-body">
                <Steps active = {this.props.state.step} />
                <Field labelText='First name'
                       type="text"
                       className={this.props.state.errors.firstName?"form-control invalid":"form-control"}
                       placeholder="Enter first name"
                       name='firstName'
                       onChange={this.props.onChange}
                       value={this.props.state.firstName}
                       error={this.props.state.errors.firstName}
                />
                <Field labelText='Last name'
                       type="text"
                       className={this.props.state.errors.last?"form-control invalid":"form-control"}
                       placeholder="Enter last name"
                       name='lastName'
                       onChange={this.props.onChange}
                       value={this.props.state.lastName}
                       error={this.props.state.errors.lastName}
                />
                <Field labelText='Passwors'
                       type="password"
                       className={this.props.state.errors.password?"form-control invalid":"form-control"}
                       placeholder="Enter password"
                       name='password'
                       onChange={this.props.onChange}
                       value={this.props.state.password}
                       error={this.props.state.errors.password}
                />
                <Field labelText='Repeat passwors'
                       type="password"
                       className={this.props.state.errors.passwordRepeat?"form-control invalid":"form-control"}
                       placeholder="Repeat password"
                       name='passwordRepeat'
                       onChange={this.props.onChange}
                       value={this.props.state.passwordRepeat}
                       error={this.props.state.errors.passwordRepeat}
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
                checked={this.props.state.gender==='male'}/>
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
              checked={this.props.state.gender==='female'}
              />
              <label 
              className="form-check-label" 
              htmlFor="female"
              >Female</label>
            </div>
          </fieldset>
          <Controls onPrev = {this.props.onPrev} onNext={this.props.onNext}/>
          
        </form>
        )
    }

}

export default Form1;