import React from  'react';
import cities from '../data/cities';
import countries from '../data/countries';



class FormFinish extends React.Component{
    render(){
        let userInfo = this.props.userInfo;
        return(
           <div className='content'>
                <div className="container-fluid  mb-4">
                    <div className='row mb-4'>
                        <div className='col-4'>
                            <img className='w-100' 
                                 src={userInfo.userpic}
                                 alt='Userpic'
                            />
                        </div>
                        <div className='col-8 d-flex align-items-center'>
                            <h4>
                                {userInfo.firstName} {userInfo.lastName}
                            </h4>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-12'>
                           <p><strong>E-mail:</strong> {userInfo.email}</p>
                        </div>
                        <div className='col-12'>
                           <p><strong>Mobile:</strong> {userInfo.mobile}</p>
                        </div>
                        <div className='col-12'>
                           <p><strong>Location:</strong> {cities[userInfo.cityID].name}, {countries.find(element =>  element.id === +userInfo.countryID).name}</p>
                        </div>
                    </div>
                
                </div>
                </div>
            )
        }
    
    }
    
    export default FormFinish;