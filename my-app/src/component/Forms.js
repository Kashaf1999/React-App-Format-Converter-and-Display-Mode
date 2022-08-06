import React, { useState } from "react";

export default function Forms(props) {
  function upperCase() {
    let upperText = text.toUpperCase();
    settext(upperText);
  }
  function lowerCase() {
    let lowerText = text.toLocaleLowerCase();
    settext(lowerText);
  }
  function clearText() {
    let upperText = "";
    settext(upperText);
  }

  function screenChange(event) {
    settext(event.target.value);
  }
  const [text, settext] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3 mx-auto">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={screenChange}
            rows="8"
          ></textarea>
          <button
            type="button"
            className="btn btn-primary my-4 mx-2"
            onClick={upperCase}
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary my-4 mx-2"
            onClick={lowerCase}
          >
            Convert to LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary my-4 mx-2"
            onClick={clearText}
          >
            Clear Text
          </button>
        </div>
        <div className="countWords">
          <h1>Your Text Summary</h1>
          <p>
            Number of words {text.split(" ").length} & Number of characters:
            {text.length}
          </p>
          <p>Reading Minutes:{0.008 * text.split(" ").length}</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
