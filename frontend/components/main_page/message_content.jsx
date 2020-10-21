import React from 'react';

class MessageContent extends React.Component {
  render() {
    return (
      <li className='message-content' key={this.props.message.id}>
        <div className='message-author'>
          <strong>{this.props.author.full_name}</strong>
          <span>{this.props.message.created_at}</span>
        </div>
        <span>{this.props.message.body}</span>
      </li>
    )
  }
}

export default MessageContent;