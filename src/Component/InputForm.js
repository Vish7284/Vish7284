import React, { useState,useContext } from "react";
import Modal from "./Reusables/Modal";
import { VoteContext } from "../store/vote-context";
const InputForm = () => {
  const [name, setName] = useState("");
  const [cand, setCand] = useState("");
  const ctx  = useContext(VoteContext)

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
    // props.onAddVoter(obj);
    // props.onCancel();
    ctx.addVoterHandler(obj);
    ctx.showAddButton();
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
          <button type="submit">Vote</button>
          <button type="cancel" onClick={() => ctx.showAddButton()}>
            X
          </button>
        </form>
      </Modal>
    </>
  );
};
export default InputForm;
