import React from  'react';

const Select = props => {
    const {name, onChange, value, error, labelText, options, className} = props;
    return(
        <div className="form-group">
              <label>{labelText}</label>
              <select className={className}
                      name={name}
                      onChange={onChange}
                      value={value}
                >
                {options} 
              </select>
              {error?<div className="invalid-feedback">{error}</div>:null}
              </div>
    )
}
export default Select