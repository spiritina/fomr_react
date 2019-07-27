import React from "react";
import classNames from 'classnames/bind';
import userpic from "../user-solid.svg";

let styles = {
  basic: 'custom-file-label',
  invalid: 'invalid'
}
let cx = classNames.bind(styles);


class FormUserpic extends React.Component {
  onChangeUserpic = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.props.onChange({
        target: {
          name: "userpic",
          value: event.target.result
        }
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    let userInfo = this.props.userInfo
    let className = cx({
      basic: true,
      invalid: this.props.errors.userpic
    })

    return (
      <div className='content'>
        <img className="mb-4 w-100" src={userInfo.userpic ? userInfo.userpic : userpic} alt="Userpic" />
        <div className="custom-file  mb-4">
          <input
            id="avatar"
            type="file"
            className="custom-file-input"
            onChange={this.onChangeUserpic}
            name="userpic"
          />
          <label className={className} htmlFor="avatar">
            Choose file
          </label>
          {this.props.errors.userpic ? (
            <div className="invalid-feedback">
              {this.props.errors.userpic}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FormUserpic;
