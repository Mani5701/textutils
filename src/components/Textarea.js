import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter Text Here !");

  const uppercaseHandler = () => {
    if(text.length>0){
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('word has been converted to uppercase', 'success')
    }
    else{
      props.showAlert('write something in the field to capitalize', 'danger')
    }
  };
  
  const clearHandler = () => {
    if(text.length>0){
      let newText = "";
      setText(newText);
      props.showAlert('textarea has been cleared', 'success')
    }else{
      props.showAlert('nothing to clear!', 'warning')  
    }
  };
  const spaceHandler = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const stateChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container my-3 px-3 py-3"
        style={{ color: props.mode === "dark" ? "#fff" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="form-group mx-1">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={stateChangeHandler}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "#fff",
              color: props.mode === "dark" ? "#fff" : "#042743",
            }}
          ></textarea>
          <button className="btn btn-primary my-2" onClick={uppercaseHandler}>
            Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={spaceHandler}>
            Remove Spaces
          </button>
          <button className="btn btn-primary my-2" onClick={clearHandler}>
            Clear
          </button>
        </div>
      </div>
      <div
        className="container my-3 text-capitalize px-3 py-3"
        style={{ color: props.mode === "dark" ? "#fff" : "#042743" }}
      >
        <h3>text summary</h3>
        <p className="my-1">
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p className="my-1">
          an average person take{" "}
          <b>{0.00546448087 * text.split(" ").length} </b> minutes to read
        </p>
        <h3>preview</h3>
        <p>
          {text.length > 0
            ? text
            : "enter the text in field above to preview it below"}
        </p>
      </div>
    </>
  );
}
