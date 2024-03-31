import React, { useState } from "react";

const InputForm = (props) => {
  const [stName, setStName] = useState("");
  const [cand, setCand] = useState("");
  const nameChangeHandler = (e) => {
    setStName(e.target.value);
  };
  const candidateChangeHandler = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex].text;
    setCand(selectedOption);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.random(),
      name: stName,
      candidate: cand,
    };
    console.log(obj);
    props.onAddVoter(obj);
    setCand("");
    setStName('')
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="name">Student Name:</label>
        <input
          id="name"
          type="text"
          value={stName}
          onChange={nameChangeHandler}
        />
        <label htmlFor="candidate">Vote for:</label>
        <select id="candidate" value={cand} onChange={candidateChangeHandler}>
          <option value="" disabled>
            Select an option
          </option>
          <option value="1">Bahubali</option>
          <option value="2">Katappaa</option>
          <option value="3">BhallalDev</option>
        </select>

        <button type="submit">Vote</button>
      </form>
    </>
  );
};

export default InputForm;
