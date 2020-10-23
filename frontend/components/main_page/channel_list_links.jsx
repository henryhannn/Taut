// create link to channel

import React from 'react';
import { Link } from 'react-router-dom';

const ChannelListLinks = ({channel}) => {
  return channel.name ? (
    <li key={channel.id} className='channel-list-link'>
      <Link to={`/mainpage/channels/${channel.id}`}><span># {channel.name}</span></Link>
    </li>
  ) : null
}

export default ChannelListLinks;