import React, { useState } from "react";
import Modal from "./Reusables/Modal";
const InputForm = (props) => {
  const [name, setName] = useState("");
  const [cand, setCand] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const candChangeHandler = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex].text;
    setCand(selectedOption);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      candidate: cand,
    };
    props.onAddVoter(obj);
    props.onCancel();
    setCand("");
    setName("")
  };

  return (
    <>
      <Modal>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="candidate">Choose Candidate:</label>
          <select id="candidate" value={cand} onChange={candChangeHandler}>
            <option value="" disabled>
              -SELECT-
            </option>
            <option value="1">Bahubali</option>
            <option value="2">Kattappa</option>
            <option value="3">BhallalDev</option>
          </select>
          <button type="submit" >Vote</button>
          <button type="cancel" onClick={() => props.onCancel()}>
            X
          </button>
        </form>
      </Modal>
    </>
  );
};
export default InputForm;
