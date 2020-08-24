import React from 'react';
import { Link } from 'react-router-dom';

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentUser) {
            
        } else {
            return (
                <div className="frontpage">
                    <ul className="navbar">
                        <Link className="frontpage_link" to="/">
                            <ul className="logo-box">
                                <li><img src={window.logo} alt="Taut Logo" className="logo" /></li>
                                <li className="title">taut</li>
                            </ul>
                        </Link>
                        <ul classname="links">
                            <li><Link to="/signin">Sign In</Link></li>
                            <li><Link to="/signup">Get Started</Link></li>
                        </ul>
                    </ul>
                    <section className="main-content">
                        <h1>taut</h1>
                        <p>testinggggggggg</p>
                    </section>
                </div>
            )
        }
    }
}

export default FrontPage;