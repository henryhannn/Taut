import React from 'react';
import Header from './header';
import channelListContainer from './channel_list_container';
import messageAreaContainer from './message_area_container';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header logout={this.props.logout}/>
                <channelListContainer/>
                <messageAreaContainer/>
            </div>
        )
    }
}

export default MainPage