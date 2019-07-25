import React from  'react';
import Step from './Step';
class Steps extends React.Component{
    render(){
        let arr = ['Basics', 'Contacts', 'Userpic', 'Finish'];
        let steps = arr.map((text, index) =><Step step={index+1} text={text} key={index} active={this.props.active}/> ) 
        return(
            <div className='col-12 d-flex justify-content-space-between'>
                {steps}
            </div>
            )
        }
    
    }
    
    export default Steps;