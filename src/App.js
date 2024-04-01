import React,{useState} from 'react';
import './App.css';
import InputForm from './Component/InputForm';
import UI from './Component/UI';
function App() {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");

  const searchChangeHandler=(e)=>{
    e.preventDefault()
    setSearch(e.target.value);
  }
  const addChangeHandler =(usedata)=>{
     setData((prevData)=>{
      return [usedata,...prevData]
     })
  }

  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(search.toLowerCase())
  );
   const total = data.length;
  return (
    <div className="App">
      <h1>Jai SiyaRam Jai Hanumaan</h1>
      <h2>Total Password {total}</h2>
      <label htmlFor='search'>Search:</label>
      <input type="text" id='search' value={search} onChange={searchChangeHandler}/>
      <InputForm onAdd={addChangeHandler}/>
      <UI data={filteredData}/>
    </div>
  );
}

export default App;
