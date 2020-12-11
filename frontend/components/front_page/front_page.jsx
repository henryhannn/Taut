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
                    <div className="section-2">
                        <div className="section-2-text">
                            <h1>Over 10 companies use Taut to get work done</h1>
                            <p>"Ideas and media are now able to be shared in near-real time through our social channels, thanks to Taut."</p>
                            <p className="section-2-text-author">Henry</p>
                            <p className="section-2-text-company">Henry Co., CEO, CFO, CTO </p>
                        </div>
                        <div className="section-2-image">
                            <img src="https://a.slack-edge.com/a084c/marketing/img/downloads/screenshots/windows/windows-hero-desktop.png" srcSet="https://a.slack-edge.com/a084c/marketing/img/downloads/screenshots/windows/windows-hero-desktop.png 1x, https://a.slack-edge.com/a084c/marketing/img/downloads/screenshots/windows/windows-hero-desktop@2x.png 2x" alt="Screenshot of the Slack app"></img>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default FrontPage;