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
                <div className='main-page-header'>
                    <Header logout={this.props.logout}/>
                </div>
                <div className='main-page-content'>
                    <div className='main-page-channel-list'>
                        <ChannelListContainer />
                    </div>
                    <div className='main-page-message-area'>
                        <MessageAreaContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage