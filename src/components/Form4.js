import React from  'react';
import Controls from './Controls';
import Steps from './Steps';

class Form3 extends React.Component{
    render(){
        return(
            <form className="form card-body">
                <Steps active = {this.props.state.step} />
                <div className="container-fluid  mb-4">
                    <div className='row mb-4'>
                        <div className='col-4'>
                            <img className='w-100' 
                                 src={this.props.state.userpic}
                                 alt='Userpic'
                            />
                        </div>
                        <div className='col-8 d-flex align-items-center'>
                            <h4>
                                {this.props.state.firstName} {this.props.state.lastName}
                            </h4>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-12'>
                           <p><strong>E-mail:</strong> {this.props.state.email}</p>
                        </div>
                        <div className='col-12'>
                           <p><strong>Mobile:</strong> {this.props.state.mobile}</p>
                        </div>
                        <div className='col-12'>
                           <p><strong>Location:</strong> {this.props.state.country}, {this.props.state.country}</p>
                        </div>
                    </div>
                
                </div>
                
                <Controls onPrev = {this.props.onPrev} onReset={this.props.onReset} onNext={this.props.onNext}/>
            </form>
            )
        }
    
    }
    
    export default Form3;