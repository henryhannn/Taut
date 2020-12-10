import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelPageContainer from './channel_page_container'
import { ProtectedRoute } from '../../../util/route_util';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels;
  }

  render() {
    const {channels} = this.props;
    return (
      <div className='channel-list'>
        <div className='channel-list-header'>
          <h1>Channels</h1>
          <ProtectedRoute path='/channels/:channelId' component={ChannelPageContainer} />
        </div>
        {channels.map(channel => (
          <li key={channel.id}>
            <Link to={`/channels/${channel.id}`} component={ChannelPageContainer}>{channel.name}</Link>
          </li>
        ))}
      </div>
    )
  }
}

export default ChannelList;