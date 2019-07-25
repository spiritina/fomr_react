import React from  'react';
import Controls from './Controls';
import userpic from '../user-solid.svg'
import Steps from './Steps';

class Form3 extends React.Component{
    render(){
        console.log(this.props.state)
        let src, classInp;
        this.props.state.userpic? src = this.props.state.userpic: src = userpic;
        this.props.state.errors.userpic? classInp = "custom-file-label invalid" :classInp = "custom-file-label"
        return(
            <form className="form card-body">
                <Steps active = {this.props.state.step} />
                <img className='mb-4 w-100' src={src} alt='Userpic' />
                <div className="custom-file  mb-4">
                    <input 
                       id="avatar"
                       type='file' 
                       className="custom-file-input" 
                       onChange={this.props.onChange} 
                       name='userpic' 
                    />
                     <label className={classInp} htmlFor="avatar">Choose file</label>
                     {this.props.state.errors.userpic?<div className="invalid-feedback">{this.props.state.errors.userpic}</div>:null}
                </div>
                
                <Controls onPrev = {this.props.onPrev} onNext={this.props.onNext}/>
            </form>
            )
        }
    
    }
    
    export default Form3;