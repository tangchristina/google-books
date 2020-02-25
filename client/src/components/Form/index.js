import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props}  style = {{margin: 20}}/>
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, marginRight: 20 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
