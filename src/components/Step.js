import React from  'react';

class Step extends React.Component{
       render(){
        let myClass;
        if(this.props.step<this.props.active){myClass='step-container done'
        } else if(this.props.step===this.props.active) {myClass='step-container is-active'
        }else{myClass='step-container'};    
        return(
            <div className={myClass}> 
                <div className='step '>
                    {this.props.step}
                </div>
                <h6>{this.props.text}</h6>
            </div>
            )
        }
    
    }
    
    export default Step;