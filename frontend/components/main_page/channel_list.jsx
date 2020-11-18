//channel list on the left

import React from 'react';
import { uniqueId } from '../../util/util';
import ChannelListLinks from './channel_list_links';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.onCreateChannel = this.onCreateChannel.bind(this);
        this.onCreateDM = this.onCreateDM.bind(this);
    }
  
    componentDidMount() {
        this.props.fetchChannels();
    };
    
    onCreateChannel(e) {
        e.preventDefault();
        this.props.openModal('createChannel');
    };

    onCreateDM(e) {
        e.preventDefault();
        this.props.openModal('createDM');
    };
  
    render() {
        const allChannels = this.props.channels.filter(channel => channel.channel_type === 'group');
        const allDMs = this.props.channels.filter(channel => channel.channel_type === 'dm');

        return (
            <div className='channel-list-container'>
                <div className='workspace-box'>
                    <h1 className='workspace-name'>Temp workspace name</h1>
                    <span className='workspace-currentuser'>{this.props.currentUser.full_name}</span>
                </div>

                <div className='channellist-box'>
                    <div className='channellist'>
                        <div className='channellist-header'>
                            <span className='channellist-name'>Channels</span>
                            <button className='create-channel-icon' onClick={this.onCreateChannel}><i className='fas fa-plus'></i></button>
                        </div>
                        <ul>
                            {allChannels.map(channelType => <ChannelListLinks key={uniqueId + Math.random()} channel={channelType} />)}
                        </ul>
                    </div>
                    <div className='channellist'>
                        <div className='channellist'>
                            <span className='channellist-header'>Direct Messages</span>
                            <button className='create-channel-icon' onClick={this.onCreateDM}><i className='fas fa-plus'></i></button>
                        </div>
                        <ul>
                            {allDMs.map(channelType => <ChannelListLinks key={uniqueId + Math.random()} channel={channelType} />)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}
  
export default ChannelList;