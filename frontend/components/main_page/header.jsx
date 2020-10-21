// header

import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <button id="logout-button" onClick={this.props.logout}>
                    Log out
                </button>
            </header>
        )
    }
}

export default Header;