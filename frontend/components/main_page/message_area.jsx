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
        if (this.props.match.params.channelId !== newProps.match.params.channelId) {
            this.props.fetchChannel(this.props.match.params.channelId);
            this.props.fetchUsers;
            this.props.fetchMemberships(this.props.channelId);
        };
    }

    onNewMember(e) {
        e.preventDefault();
        this.props.openModalWithProps('new_member', { channelName: channel.name, channelId: channel.id });
    }

    openAboutChannel(e) {
        e.preventDefault;
        this.props.openAboutChannel();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default MessageArea