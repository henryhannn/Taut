import React from 'react';
import Modal from 'react-modal';
import { useStore } from 'react-redux';
import MessageFormContainer from '../messages/message_form_container';

class ChannelPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      messages: this.props.messages
    }
    this.bottom = React.createRef();
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
    this.props.fetchMessages();
  }

  componentDidUpdate(newProps) {
    if (this.props.match.params.channelId !== newProps.match.params.channelId) {
      this.props.fetchChannel();
      this.props.fetchMessages();
    };
  }

  formatDate(date) {
    if(!date) return null;
    const arr = date.slice(0,10).split("-");
    return `${arr[1]}/${arr[2]}/${arr[0]}`
  }

  render() {
    if (!this.props.channel) return null;
    const channel = this.props.channel;
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
    )
  }
}

export default ChannelPage;