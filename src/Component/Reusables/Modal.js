import React from "react";
import ReactDOM  from "react-dom";
import classes from "./Modal.module.css"
const ModalOverLays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const BackDrop = props=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
}
const portalPlace = document.getElementById("modal");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalPlace)}
      {ReactDOM.createPortal(
        <ModalOverLays>{props.children}</ModalOverLays>,
        portalPlace
      )}
    </>
  );
};
export default Modal;
