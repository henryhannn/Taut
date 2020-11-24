// main message area

import React from 'react';
import MessageContent from './message_content';
import MessageForm from './message_form';

class MessageArea extends React.Component {
    constructor(props) {
        super(props);
        this.onNewMember = this.onNewMember.bind(this);
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "MessageChannel" },
            {
                received: data => {
                    this.props.receiveMessage(data)
                },
                speak: function (data) {
                    return this.perform("speak", data);
                }
            }
        );
        this.props.fetchChannels();
        this.props.fetchChannel(this.props.channelId);
        this.props.fetchUsers();
        this.props.fetchMemberships(this.props.channelId);
        this.props.fetchMessages(this.props.channelId);
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

    openAbout(e) {
        e.preventDefault;
        this.props.openAbout();
    }

    render() {
        const existingMessages = this.props.existingMessages;
        const channel = this.props.channel || {name: '', description: '', id: this.props.channelId}
        if (!existingMessages) {
            return null;
        } else {
            return (
                <div>
                    <div className='message-area'>
                        <div className='message-area-header'>
                            <div className='message-area-channel-name'>
                                {channel.name}
                            </div>
                            <ul className='message-area-button'>
                                <li onClick={this.onNewMember}><i className='fas fa-user-plus'></i></li>
                            </ul>
                        </div>
                        <ul className='message-content'>
                            {existingMessages.map(messages => 
                            <MessageContent key={messages.id} message={messages} author={this.props.users[messages.author_id]}/>)}
                        </ul>
                        <MessageForm createMessage={this.props.createMessage} channelId={channel.id} channelName={channel.name} authorId={this.props.currentUser.id}/>
                    </div>
                </div>
            )
        }
    }
}

export default MessageArea