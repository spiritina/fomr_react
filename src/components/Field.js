import React from  'react';

const Field = props => {
    const {type, className, placeholder, name, onChange, value, error, labelText} = props;
    return(
        <div className="form-group">
                <label>{labelText}</label>
                <input
                  type={type}
                  className={className}
                  placeholder={placeholder}
                  name={name}
                  onChange={onChange}
                  value={value}
                />
                {error?<div className="invalid-feedback">{error}</div>:null}
              </div>
    )
}
export default Field