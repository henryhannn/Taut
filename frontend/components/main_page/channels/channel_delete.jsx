import React from 'react';

class ChannelDelete extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.deleteChannel = this.deleteChannel.bind(this);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  deleteChannel(channelId) {
    this.props.deleteChannel(channelId).then(this.props.closeModal)
  }

  render() {
    const channels = this.props.channels;
    return (
      <div className='channel-delete'>
        <div className='channel-delete-top'>
          <h1 className='channel-delete-top-header'>Delete a Channel</h1>
          <span className='channel-delete-top-message'>
            Click the channel you wish to delete.
          </span>
          <br/>
          <br/>
        </div>
        <div className='channel-delete-list'>
          {channels.map((channel) => ( 
              <li className={'channel-list'} key={channel.id} onClick={() => this.deleteChannel(channel.id)}>
                # {channel.name}
              </li>
          ))}
        </div>
      </div>
    )
  }
}

export default ChannelDelete;