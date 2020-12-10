import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      channel_type: 'group'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state);
    this.props.submitForm(channel)
      .then(() => (
        this.props.closeModal()
      ))
  }

  render() {
    return (
      <div className='channel-form'>
        <div className='channel-form-top'>
          <h1 className='channel-form-top-header'>Create A New Channel</h1>
          <span className='channel-form-top-message'>
            Enter the topic you would like your channel to be about.
          </span>
          <br/>
          <br/>
          <form onSubmit={this.handleSubmit} className='new-channel-form'>
            <span className='new-channel-form-text'>CHANNEL NAME</span>
            <br/>
            <input
              type='text'
              value={this.state.name}
              onChange={this.update('name')}
              className='new-channel-form-input'
            />
          </form>
        </div>
        <div className='channel-form-bottom'>
          <span className='back-button' onClick={this.props.closeModal}>Back</span>
          <input
            type='submit'
            value='Create'
            onClick={this.handleSubmit}
            className='new-channel-form-submit-button'
          />
        </div>
      </div>
    )
  }
}

export default ChannelForm