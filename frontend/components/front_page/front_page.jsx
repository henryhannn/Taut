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
                    <div className="section-1">
                        <video autoPlay muted loop>
                            <source src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4"></source>
                        </video>
                        <div className="section-1-text">
                            <h1>Bring your team together in channels</h1>
                            <p>A channel is the place for everything related to a project, topic or team. Everyone in a channel sees the same messages and stays on the same page.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default FrontPage;