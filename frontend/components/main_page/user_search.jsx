import React from 'react';

class UserSearch extends React.Component {
  render() {
    if (this.props.message === "") {
      return (
        <div className='user-search' onClick={this.props.handleSelect}>
          <span className='user-search-name'>{this.props.username}</span>
        </div>
      )
    } else {
      return (
        <span>{this.props.message}</span>
      )
    }
  }
}

export default UserSearch