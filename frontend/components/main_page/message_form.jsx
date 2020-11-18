// message form

import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      author_id: this.props.authorId,
      channel_name: this.props.channelName,
      channel_id: this.props.channelId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  componentWillReceiveProps(prevProps) {
    this.setState({
      channel_name: prevProps.channelName,
      channel_id: prevProps.channelId
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.setState({
      body: '',
      author_id: this.props.authorId,
      channel_id: this.props.channelId
    })
  }

  updateMessage(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    return (
      <form className='message-form' id='message-form' onSubmit={this.handleSubmit}>
        <input id=""  value={this.state.body} onChange={this.updateMessage} placeholder={`Message #${this.state.channel_name}`} required></input>
        <ul className='message-form-button'>
            <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
        </ul>
      </form>
    )
  }
}

export default MessageForm;