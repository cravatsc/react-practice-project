import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

export const Backdrop: React.FC = (props) => {
  return <div className={classes.backdrop}></div>;
};

export const ModalOverlay: React.FC = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

export const Modal: React.FC = (props) => {
  return portalElement ? (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  ) : (
    <></>
  );
};
