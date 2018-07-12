import React, { Component, Fragment } from "react";
import { ModalWrapper } from "./Modal.styled";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    var { children, show, modalClosed } = this.props;

    return (
      <Fragment>
        <Backdrop show={show} clicked={modalClosed} />
        <ModalWrapper show={show}>{children}</ModalWrapper>
      </Fragment>
    );
  }
}

export default Modal;
