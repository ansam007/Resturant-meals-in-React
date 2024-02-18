import classes from "./Modal.module.css";
import React from 'react';
// import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop}> </div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
    return (
        <React.Fragment>
            {/* {React.createPortal(<Backdrop></Backdrop>)}
            {React} */}
            <Backdrop></Backdrop>
            <ModalOverlay>{props.children}</ModalOverlay>

        </React.Fragment>
    )
};

export default Modal;
