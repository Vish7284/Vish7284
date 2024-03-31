import React,{useState} from 'react';
import './App.css';
import InputForm from './Components/InputForm.js/InputForm';
import Onscreen from './Components/UI/Onscreen';

function App() {

  const [voters,setVoters] = useState([]);

  const addVoterHandler =(voted) => {
    setVoters((prevVote)=>{
      return [...prevVote,voted]
    })
  }
  console.log(voters);
  const total = voters.length;
  return (
    <div className="App">
      <h1>Jai SiyaRam Jai Hanuman</h1>
      <h2>Total vote  {total}</h2>
      <InputForm onAddVoter={addVoterHandler} />
      <Onscreen voters ={voters}/>
    </div>
  );
}

export default App;
