import React from "react";
import Step from "./Step";

const STEPS_NAME = ["Basics", "Contacts", "Userpic", "Finish"];

class Steps extends React.Component {
  render() {
    return (
      <div className="col-12 d-flex justify-content-space-between">
        {STEPS_NAME.map((name, index) => (
          <Step
            step={index + 1}
            name={name}
            key={index}
            active={this.props.active}
          />
        ))}
      </div>
    );
  }
}

export default Steps;
