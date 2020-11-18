import React from 'react';

class WebSocket extends React.Component {
  componentDidMount(){
    this.props.getConversationData(window.location.href.match(/\d+$/)[0])

    this.props.cableApp.conversation = this.props.cableApp.cable.subscriptions.create({
        channel: 'MessageChannel',
        conversation: window.location.href.match(/\d+$/)[0]
    },
    {
        received: (updatedConversation) => {
            this.props.updateApp(updatedConversation)
        }
  })    
}

render(){
  return (
    <div></div>
  )
}

}

export default WebSocket;