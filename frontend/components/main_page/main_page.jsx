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
                <img src="https://i.kym-cdn.com/entries/icons/original/000/028/021/work.jpg" srcSet="https://i.kym-cdn.com/entries/icons/original/000/028/021/work.jpg"></img>
                {/* <ChannelListContainer />
                <MessageAreaContainer /> */}
            </div>
        )
    }
}

export default MainPage