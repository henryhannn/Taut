import React from 'react';
import Modal from 'react-modal';
import { ProtectedRoute } from '../../../util/route_util';
import { useStore } from 'react-redux';
import MessageFormContainer from '../messages/message_form_container';
import ChannelFormContainer from './channel_form_container';

class ChannelPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      messages: this.props.messages
    }
    this.bottom = React.createRef();
    this.toggleModal = this.toggleModal.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: 'ChatChannel'},
      {
        received: data => {
          this.props.receiveMessage(data)
        },
        speak: function (data) {
          return this.perform('speak', data);
        }
      }
    )
    this.props.fetchChannel();
    this.props.fetchChannels();
    this.props.fetchMessages();
  }

  componentDidUpdate(newProps) {
    if (this.props.match.params.channelId !== newProps.match.params.channelId) {
      this.props.fetchChannel();
      this.props.fetchChannels();
      this.props.fetchMessages();
    };
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  logoutUser() {
    this.props.logoutUser().this(() => this.props.history.push('/login'))
  }

  formatDate(date) {
    if(!date) return null;
    const arr = date.slice(0,10).split("-");
    return `${arr[1]}/${arr[2]}/${arr[0]}`
  }

  render() {
    if (!this.props.channel) return null;
    const channel = this.props.channel;
    const channels = this.props.channels;
    const messages = this.props.messages.map(message => {
      return (
        <li className='message' key={message.id}>
          <div className='message-container'>
            <div className='message-author'>
              <h3>{message.author}</h3>
              <p>{this.formatDate(message.created_at)}</p>
            </div>
            <div className='message-body'>{message.body}</div>
          </div>
        </li>
      )
    })

    return (
      <div>
        <div className='header'>
          <h2>Hello {this.props.currentUser.full_name}!</h2>
          <div className='logout-button-container' onClick={this.logoutUser}>
            <i className='fas fa-sign-out-alt'></i>
            <span className='logout-button-hover-text'>Logout</span>
          </div>
        </div>
        <div className='channel-list-container'>
          <ul className='channel-list'>
            {channels.map((channel) => (
              <li
                className={'channel-links'}
                key={channel.id}
                onClick={() => this.props.history.push(`/channels/${channel.id}`)}
              >
                # {channel.name}
              </li>
            ))}
            <div className='channel-form-container'>
              <li className='channel-form-container-button-text' onClick={this.toggleModal}>
                <span className='channel-form-container-button'>Create a new channel</span>
              </li>

              <Modal
                className='channel-form-modal'
                isOpen={this.state.showModal}
                onRequestClose={this.toggleModal}
                ariaHideApp={false}
                style={{
                  content: {
                    position: 'absolute',
                    top: '20%',
                    bottom: '20%'

                  },
                  overlay: {
                    position: 'fixed',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: '50'
                  }
                }}
              >
                <ChannelFormContainer closeModal={this.toggleModal} />
              </Modal>
            </div>
          </ul>
          {/* <div>
            <ProtectedRoute path='/channels/:channelId' component={ChannelPageContainer} />
          </div> */}
        </div>
        <br/>
        <div className='channel-container'>
          <h1 className='channel-header'># {channel.name}</h1>
          <div className='message-area'>
            <div className='message-header'>
              <span className='message-header-welcome'>
                Welcome to #{channel.name}
              </span>
              <br/>
              <span className='message-header-message'>
                Start chatting about everything related to #{channel.name}
              </span>
            </div>
            {messages}
          </div>
          <MessageFormContainer
            className='message-form-container'
            channel={channel}
          />
        </div>
      </div>
    )
  }
}

export default ChannelPage;