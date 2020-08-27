import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            full_name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    handleDemo(e) {
        e.preventDefault();
        this.props.signInForm({ email: "DemoUser@Demo.com", password: "demouser" });
    }

    componentDidMount() {
        const input = document.getElementById('email');
        input.focus();
        this.props.clearSigninErrors();
    }
  
    renderErrors() {
        return(
            <div className="signin-errors">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={i}>{error}</li>
                    ))}
                </ul>
            </div>
        );
    }
  
    render() {
        return (
            <div className="signup-form-container">
                <ul className="logo-box">
                    <Link className="frontpage-link" to="/" onClick={this.props.clearSigninErrors}>
                        <li><img src={window.logo} alt="Taut Logo" className="logo" /></li>
                        <li className="title">taut</li>
                    </Link>
                </ul>

                <br/>
                <div className="main-content">
                    <h1>Sign up for taut</h1>
                    <p>Enter your email address, full name and password.</p>

                    <div className="error-container">{this.renderErrors()}</div>

                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                        <div className="signup-form">
                            <li className="email-box">
                                <input id="email"
                                    type="text"
                                    placeholder="you@email.com"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signup-input"
                                />
                            </li>
                            <br/>
                            <li className="fullname-box">
                                <input type="text"
                                    placeholder="your name"
                                    value={this.state.full_name}
                                    onChange={this.update('full_name')}
                                    className="signup-input"
                                />
                            </li>
                            <br/>
                            <li className="password-box">
                                <input type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                />
                            </li>
                            <br/>
                            <li className="submit">
                                <button>Sign up</button>
                            </li>
                        </div>
                    </form>
                    <form>
                        <div>
                            <li className="demouser">
                                <button onClick={this.handleDemo}>Demo user</button>
                            </li>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
  
export default SignupForm;