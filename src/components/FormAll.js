import React from  'react';
import Controls from './Controls';
import Steps from './Steps';
import FormBasic from './FormBasic';
import FormContacts from './FormContacts';
import FormUserpic from './FormUserpic';
import FormFinish from './FormFinish';
class FormAll extends React.Component{
    
    render(){
        let step = this.props.step
        return(
            <div className = "form-container card">
            <form className="form card-body">
                <Steps active = {step}   />
                {   step===1&&<FormBasic    userInfo = {this.props.userInfo}
                                            errors = {this.props.errors}
                                            onPrev = {this.props.onPrev}
                                            onNext = {this.props.onNext}
                                            onChange={this.props.onChange}  />}
                    {step===2&&<FormContacts userInfo = {this.props.userInfo}
                                            errors = {this.props.errors}
                                            onPrev = {this.props.onPrev}
                                            onNext = {this.props.onNext}
                                            onChange={this.props.onChange}   />}
                    {step===3&&<FormUserpic  userInfo = {this.props.userInfo}
                                            errors = {this.props.errors}
                                            onPrev = {this.props.onPrev}
                                            onNext = {this.props.onNext}
                                            onChange={this.props.onChange} />}
                    {step===4&&<FormFinish  userInfo = {this.props.userInfo}
                                            errors = {this.props.errors}
                                            onPrev = {this.props.onPrev}
                                            onNext = {this.props.onNext}
                                            onChange={this.props.onChange} />}

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