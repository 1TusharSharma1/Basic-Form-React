import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState();
  const [isValid, setIsValid] = useState(true);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === ""){
      setIsValid(false)
       return;
    }
    setIsValid(true);
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    setEnteredName("");
    // nameInputRef.current.value = ''; //  As it is directly manipulation DOM, It is not ideal.
  };
  const inputClass = isValid? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
        {!isValid && <p className="error-text">Name cannot be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
