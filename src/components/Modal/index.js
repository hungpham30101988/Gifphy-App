import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';

class ModalRedux extends React.Component {
  render() {
    return (
      <>
      <Modal
        show={this.props.isOpen}
        onHide={this.props.handleClose}
      >
        {this.props.children}
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={this.props.handleClose}
          >
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

ModalRedux.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
}


export default ModalRedux;