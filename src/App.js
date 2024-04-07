import React, {useContext} from "react";
import "./App.css";
import InputForm from "./Component/InputForm";
import UI from "./Component/UI";
import { VoteContext } from "./store/vote-context";

function App() {
 const ctx = useContext(VoteContext)
 console.log(ctx);
  const total = ctx.voters.length
  return (
      <div className="App">
        <h1>Class Monitor Vote -:</h1>
        <h3>Total Votes -:{total}</h3>
        {!ctx.show && <button onClick={ctx.showForm}>Add New Vote</button>}
        {ctx.show && (
          <InputForm />
        )}
        <UI />
      </div>
  );
}

export default App;
