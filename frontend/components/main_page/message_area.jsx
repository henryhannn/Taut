// main message area

import React from 'react';
import MessageContent from './message_content';
import MessageForm from './message_form';
import AboutChannelContainer from './about_channel_container';

class MessageArea extends React.Component {
    constructor(props) {
        super(props);
        App.cable.subscriptions.create(
            {channel: 'MessageChannel'},
            {
                received: (data) => {
                    this.props.receiveMessage(data);
                }
            }
        )
    }

    componentDidMount() {
        this.props.fetchChannels();
        this.props.fetchChannel(this.props.channelId);
        this.props.fetchUsers();
        this.props.fetchMemberships(this.props.channelId);
    }

    componentDidUpdate(newProps) {

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default MessageArea