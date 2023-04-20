import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const convertUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if(text === ""){
      props.showAlert("warning", "Please enter some text")
    }else{
      props.showAlert("success", "Text Converted to UpperCase")
    }
  };
  const converLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text === ""){
      props.showAlert("warning", "Please enter some text")
    }else{
      props.showAlert("success", "Text Converted to LowerCase")
    }
  };
  const toReverse = ()=>{
    let newText = text.split("").reverse().join("");
    setText(newText)
    if(text === ""){
      props.showAlert("warning", "Please enter some text")
    }else{
      props.showAlert("info", "Text is reversed")
    }
  }
  const resetText = ()=>{
    setText("")
      props.showAlert("warning", "Text is clear")
  }
  const speak = (event) => {

    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance)
    if(text===""){
      props.showAlert("warning", "Please enter some text")
    }
  
  }

  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==="light"?"white":props.color,color:props.mode==="light"?"black":"white"}}>
        <h1>Enter Text Below</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter Text Here"
          value={text}
          onChange={handleChange}
          style={{backgroundColor:props.mode==="light"?"white":props.color,color:props.mode==="light"?"black":"white"}}
        ></textarea>
  
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} m-1`} onClick={convertUpper}>
          ConverToUpperCase
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} m-1`} onClick={converLower}>
          ConverToLowerCase
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} m-1`} onClick={toReverse}>
          ReverseString
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} m-1`} onClick={speak}>
          speak
        </button>
        <button className={`btn btn-${props.mode==="light"?"primary":"secondary"} m-1`} onClick={resetText}>
          Reset
        </button>
      </div>
      <div className="container" style={{backgroundColor:props.mode==="light"?"white":props.color,color:props.mode==="light"?"black":"white"}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((key) => key).length} words and {text.length}{" "}
          characters
        </p>
        <p>
          It will take{" "}
          {(0.003 * text.split(" ").filter((key) => key).length).toFixed(3)}{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text === ""?"Enter somthing in the above input box to preview it here":""}</p>
        <textarea
          className="form-control"
          rows="8"
          value={text}
          style={{backgroundColor:props.mode==="light"?"white":props.color,color:props.mode==="light"?"black":"white"}}
        readOnly></textarea>
      </div>
    </>
  );
}
