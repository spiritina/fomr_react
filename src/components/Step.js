import React from "react";

class Step extends React.Component {
  render() {
    let myClass = "step-container";
    if (this.props.step < this.props.active) {
      myClass += " done";
    }
    if (this.props.step === this.props.active) {
      myClass += " is-active";
    }
    return (
      <div className={myClass}>
        <div className="step ">{this.props.step}</div>
        <h6>{this.props.name}</h6>
      </div>
    );
  }
}

export default Step;
