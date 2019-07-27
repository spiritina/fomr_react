import React from  'react';


class FormFinish extends React.Component{
    render(){
        return(
           <div className='content'>
                <div className="container-fluid  mb-4">
                    <div className='row mb-4'>
                        <div className='col-4'>
                            <img className='w-100' 
                                 src={this.props.userInfo.userpic}
                                 alt='Userpic'
                            />
                        </div>
                        <div className='col-8 d-flex align-items-center'>
                            <h4>
                                {this.props.userInfo.firstName} {this.props.userInfo.lastName}
                            </h4>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-12'>
                           <p><strong>E-mail:</strong> {this.props.userInfo.email}</p>
                        </div>
                        <div className='col-12'>
                           <p><strong>Mobile:</strong> {this.props.userInfo.mobile}</p>
                        </div>
                        <div className='col-12'>
                           <p><strong>Location:</strong> {this.props.userInfo.country}, {this.props.userInfo.country}</p>
                        </div>
                    </div>
                
                </div>
                </div>
            )
        }
    
    }
    
    export default FormFinish;