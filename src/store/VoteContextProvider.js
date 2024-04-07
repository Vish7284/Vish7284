import { VoteContext } from "./vote-context"
import React,{useState} from "react";


const VoteContextProvider =(props)=>{
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
const voterContext ={
        voters: voters,
        show: show,
        setShow:setShow,
        addVoterHandler: addVoterHandler,
        removeHandler: removeHandler,
        showAddButton:showAddButton,
        showForm:showForm,
      }
    return(
        <VoteContext.Provider value={voterContext}>
            {props.children}
        </VoteContext.Provider>

    )
}

export default VoteContextProvider;