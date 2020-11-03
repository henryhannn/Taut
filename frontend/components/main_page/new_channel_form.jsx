import React from 'react';
import { Redirect } from 'react-router-dom';

class NewChannelForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: '',
      newChannelId: null
    }
  this.handleClick = this.handleClick.bind(this);
  this.onChangeUpdate = this.onChangeUpdate.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const newChannel = {
      name: this.state.name,
      channel_type: 'group'
    };
    
    this.props.createChannel(newChannel, (id) => {
      this.setState({newChannelId: id})}
    ).then(() => {
      this.props.fetchChannels();
      this.props.closeModal();
    })
    this.setState({
      name: ''
    });
  }

  onChangeUpdate(entry) {
    return (e) => {
      this.setState({[entry]: e.target.value})
    }
  }

  render() {
    if (!this.state.newChannelId) {
      return (
        <form className='new-channel-form' onSubmit={this.handleClick}>
          <h2 className='new-channel-form-title'>Create a New Channel</h2>
          <br/>
          <br/>
          <label className='new-channel-form-name'>Name</label>
          <br/>
          <input className='new-channel-form-input' type="text" onChange={this.onChangeUpdate('name')} placeholder="# enter a name here" value={this.state.name}/>
          <br/>
          <br/>
          <button className='new-channel-form-submit'>Create</button>
        </form>
      )
    } else {
      return (<Redirect to={`/client/channels/${this.state.newChannelId}`}/>)
    }
  }
}

export default NewChannelForm;