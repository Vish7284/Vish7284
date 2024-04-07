import React from "react";

export const VoteContext = React.createContext({
  voters: [],
  addVoterHandler: ()=>{},
  removeHandler: ()=>{},
  showAddButton: ()=>{},
  showForm: ()=>{},
});