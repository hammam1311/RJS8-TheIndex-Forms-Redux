import React, { Component } from "react";

import BookForm from "./BookForm";
import Modal from "react-responsive-modal";

class AddBookModal extends Component {
  state = {
    open: false
  };

  openModal = () => this.setState({ open: true });

  closeModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.closeModal} center>
          <BookForm author={this.props.author} closeModal={this.closeModal} />
        </Modal>
        <input type="button" onClick={this.openModal} value="Add New Book!" />
      </div>
    );
  }
}

export default AddBookModal;
