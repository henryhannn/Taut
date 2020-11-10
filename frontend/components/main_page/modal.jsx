import React from 'react';
import NewChannelFormContainer from './new_channel_form_container';
import NewDMFormContainer from './new_dm_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {modal} = this.props.modal ?? {};
    if (!modal) {
      return null;
    }
    let modalType;
    
    switch (modal) {
      case 'createChannel':
        modalType = <NewChannelFormContainer />;
        break;
      case 'createDM':
        modalType = <NewDMFormContainer />;
        break;
      default:
        modalType = null;
        break;
    }

    return (
      <div className='modal-background'>
        <div className='modal-box'>
          <button className='modal-close-button' onClick={this.props.closeModal}>&times;</button>
          {modalType}
        </div>
      </div>
    )
  }
}

export default Modal;