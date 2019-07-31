import React from  'react';
import Controls from './Controls';
import Steps from './Steps';
import FormBasic from './FormBasic';
import FormContacts from './FormContacts';
import FormUserpic from './FormUserpic';
import FormFinish from './FormFinish';
class FormAll extends React.Component{
    
    render(){
        let step = this.props.step,
        userInfo = this.props.userInfo,
        errors = this.props.errors,
        onChange = this.props.onChange
        return(
            <div className = "form-container card">
            <form className="form card-body">
                <Steps active = {step}   />
                {   step===1&&<FormBasic    userInfo = {userInfo}
                                            errors = {errors}
                                            onChange={onChange}  />}
                    {step===2&&<FormContacts userInfo = {userInfo}
                                            errors = {errors}
                                            onChange={onChange}   />}
                    {step===3&&<FormUserpic  userInfo = {userInfo}
                                            errors = {errors}
                                            onChange={onChange} />}
                    {step===4&&<FormFinish  userInfo = {userInfo}
                                            errors = {errors}
                                            onChange={onChange} />}

                <Controls   onPrev = {this.props.onPrev} 
                            onReset= {this.props.onReset} 
                            active={step} 
                            onNext={this.props.onNext}/>          
            </form>
            </div>
        )
    }

}

export default FormAll;