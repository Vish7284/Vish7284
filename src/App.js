import React,{useState} from 'react';
import './App.css';
import InputForm from './Component/InputForm';
import UI from './Component/UI';

function App() {
   const [voters,setVoters] =useState([]);
   const [show,setShow] = useState(false);

   const addVoterHandler=(voted)=>{
setVoters((prevVoter)=> {
  return [voted,...prevVoter]
})
   }
   const removeHandler =(name)=>{
    const updatedList = voters.filter((vote)=> vote.name !== name);
    setVoters(updatedList)
   }
   const showAddButton = ()=>{
    setShow(false);
   }
   const showForm = ()=>{
    setShow(true)
   }
   const total = voters.length;
  return (
    <div className="App">
      <h1>Class Monitor Vote -:</h1>
      <h3>Total Votes -:{total}</h3>
      {!show && <button onClick={showForm}>Add New Vote</button>}
     { show && <InputForm onAddVoter={addVoterHandler} onCancel={showAddButton} />}
      <UI voters={voters} onRemove={removeHandler} />
    </div>
  );
}

export default App;
