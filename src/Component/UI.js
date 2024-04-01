import React from "react";

const UI =(props)=>{

    return(
        <>
        <h2>All Details:</h2>
        {props.data.map((i,index)=>{
            return <li key={index}>{i.username} {i.password}
            <button type="delete">Delete</button><button type="button">Edit</button></li>
        })}
        </>
    )
};


export default UI;