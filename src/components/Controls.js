import React from "react";

const Controls = props => {
  const { onNext, onPrev } = props;
  return (
    <div className="form-group d-flex justify-content-center">
      <button type="submit" className="btn btn-light mr-3 " onClick={onPrev}>
        Previous
      </button>
      {props.active=== 4 ? (
        <button
          type="submit"
          className="btn btn-primary mr-3"
          onClick={props.onReser}
        >
          Reset
        </button>
      ) : null}
      <button type="submit" className="btn btn-secondary " onClick={onNext}>
        Next
      </button>
    </div>
  );
};
export default Controls;
