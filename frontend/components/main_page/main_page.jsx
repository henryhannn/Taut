import React from 'react';
import Header from './header';
import ChannelListContainer from './channel_list_container';
import MessageAreaContainer from './message_area_container';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-page">
                <Header logout={this.props.logout}/>
                {/* <ChannelListContainer />
                <MessageAreaContainer /> */}
            </div>
        )
    }
}

export default MainPage