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
    let modalTarget;
    
    switch (modal) {
      case 'createChannel':
        modalTarget = <NewChannelFormContainer />;
        break;
      case 'createDM':
        modalTarget = <NewDMFormContainer />;
        break;
      default:
        modalTarget = null;
        break;
    }

    return (
      <div className='modal-background'>
        <div className='modal-box'>
          <button className='modal-close-button' onClick={this.props.closeModal}>&times;</button>
          {modalTarget}
        </div>
      </div>
    )
  }
}

export default Modal;