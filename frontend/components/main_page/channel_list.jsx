import React from 'react';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
    }
  
    componentDidMount() {
        this.props.fetchChannels();
    };
  
    showChannels(channels) {
        return Object.values(channels).map((channel, idx) => {
            return (
            <li key={idx}>
                <Link to={`/client/${channel.id}`} className="channel-link">{channel.name}</Link>
            </li>
            );
        });
    };
  
    render() {
        return (
            <div className="sidebar">
            <section className="channel-list">
                <ul id="list">{this.showChannels(this.props.channels)}</ul>
            </section>
            </div>
        );
    };
}
  
export default ChannelList;