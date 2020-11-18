import React from 'react';
import UserSearch from './user_search';

class NewMemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selected: []
    }
  }

  handleSearch(e) {
    this.setState({search: e.target.value})
  }

  searchForUsers() {
    const matchingNames = [];
    Object.values(this.props.users).forEach((user) => {
        const subStr = user.full_name.slice(0, this.state.search.length)
        if (subStr.toLowerCase() === this.state.search.toLowerCase()) {
            matches.push(user);
        }
    })
    return matchingNames;
  }

  handleSelect(user) {
    if (!this.state.selected.includes(user)) {
      let selectedUsers = [...this.state.selected, user]
      this.setState({ selected: selectedUsers })
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.state.selected.map((user) => {
      this.props.createMembership({
        user_id: user,
        channel_id: this.props.channelId
      })
    })
    this.props.fetchMemberships(this.props.channelId);
    this.props.closeModal();
  }

  render() {
    let users = this.searchForUsers().map(user => {
      return (
        <UserSearch message="" name={user.full_name} handleSelect={() => this.handleSelect(user.id)} key={user.id} />
      )
    })

    return (
      <form className='new-member-form'>
        <h2 className='new-member-form-title'>Add new members to #{this.props.channelName}</h2>
        <div className='new-member-form-search'>
          <input className='new-member-form-input' type="text" value={this.state.search} onChange={this.handleSearch} placeholder="Enter a name" />
          <button className='new-member-form-submit' onSubmit={this.handleClick}>Go</button>
        </div>
        <div className='new-member-form-message'>
          <div>
            {users.length === 0 ? (<UserSearch message="No user goes by that name" />) : (users)}
          </div>
        </div>
      </form>
    )
  }
}