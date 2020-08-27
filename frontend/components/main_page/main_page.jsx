import React from 'react';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button id="logout-button" onClick={this.props.logout}>
                    Log out
                </button>
            </div>
        )
    }
}

export default MainPage