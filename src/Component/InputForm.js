import React,{useState} from "react";

const InputForm =(props) =>{
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const usernameChangeHandler =(e)=>{
        setUserName(e.target.value);
    }

    const passwordChangeHandler =(e)=>{
        setPassword(e.target.value);
    }
    const formSubmitHandler =(e)=>{
        e.preventDefault();
        const userData ={
            username:userName,
            password:password
        }
        console.log("Jai Hanumaan",userData);
        props.onAdd(userData);
        setUserName("");
        setPassword("");
    }
return (
  <>
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="username">User Name:</label>
      <input id="username" type="text" value={userName} onChange={usernameChangeHandler}/>
      <label htmlFor="password">Password : </label>
      <input id="password" type="password" value={password} onChange={passwordChangeHandler}/>
      <button type="submit"> Add </button>
    </form>
  </>
);
}

export default InputForm;