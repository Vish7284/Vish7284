import React, { useState } from "react";
import "./App.css";
import InputForm from "./Component/InputForm";
import UI from "./Component/UI";
import { VoteContext } from "./store/vote-context";

function App() {
  const [voters, setVoters] = useState([]);
  const [show, setShow] = useState(false);

  const addVoterHandler = (voted) => {
    setVoters((prevVoter) => {
      return [voted, ...prevVoter];
    });
  };
  const removeHandler = (name) => {
    const updatedList = voters.filter((vote) => vote.name !== name);
    setVoters(updatedList);
  };
  const showAddButton = () => {
    setShow(false);
  };
  const showForm = () => {
    setShow(true);
  };
  const total = voters.length;
  return (
    <VoteContext.Provider
      value={{
        voters: voters,
        show: show,
        addVoterHandler: addVoterHandler,
        removeHandler: removeHandler,
        showAddButton:showAddButton,
        showForm:showForm,
      }}
    >
      <div className="App">
        <h1>Class Monitor Vote -:</h1>
        <h3>Total Votes -:{total}</h3>
        {!show && <button onClick={showForm}>Add New Vote</button>}
        {show && (
          <InputForm />
        )}
        <UI />
      </div>
    </VoteContext.Provider>
  );
}

export default App;
