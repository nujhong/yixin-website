import React, { Component } from 'react';
import FileUploader from './FileUploader';
import { Box, Modal, ModalBackground, ModalClose, ModalContent } from 'bloomer';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleModalToggle = this.handleModalToggle.bind(this)
  }

  handleModalToggle() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <Modal isActive={this.state.isActive}>
          <ModalBackground />
          <ModalContent>
            <Box>
              <FileUploader />
            </Box>
          </ModalContent>
          <ModalClose onClick={this.handleModalToggle}/>
      </Modal>
    );
  }

}

export default ContactForm;
