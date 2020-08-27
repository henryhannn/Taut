import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="front-page">
                <ul className="navbar">
                    <Link className="frontpage-link" to="/">
                        <ul className="logo-box">
                            <li><img src={window.logo} alt="Taut Logo" className="logo" /></li>
                            <li className="title"> taut</li>
                        </ul>
                    </Link>
                    <ul className="links">
                        <ul className="signin-link">
                            <li><Link to="/signin">Sign In</Link></li>
                        </ul>
                        <ul className="signup-link">
                            <li><Link to="/signup">Get Started</Link></li>
                        </ul>
                    </ul>
                </ul>
                <section className="main-content">
                    <h1>Taut is where work happens</h1>
                    <p>testinggggggggg</p>
                </section>
            </div>
        )
    }
}

export default FrontPage;