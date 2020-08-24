import React from 'react';
import { Link } from 'react-router-dom';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        this.props.processForm({ email: "DemoUser@Demo.com", password: "demouser" });
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
            <div className="signin-form-container">
                <Link className="frontpage_link" to="/" onClick={this.props.clearSigninErrors}>
                    <ul className="logo-box">
                        <li><img src={window.logo} alt="Taut Logo" className="logo" /></li>
                        <li className="title">taut</li>
                    </ul>
                </Link>

                <br/>

                <h1>Sign in to you workspace</h1>
                <p>Enter your email address and password.</p>

                <div className="error-container">{this.renderErrors()}</div>

                <form onSubmit={this.handleSubmit} className="signin-form-box">
                    <div className="signin-form">
                        <li className="email-box">
                            <input id="email"
                                type="text"
                                placeholder="you@email.com"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signin-input"
                            />
                        </li>
                        <br/>
                        <li className="password-box">
                            <input type="password"
                                placeholder="email"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signin-input"
                            />
                        </li>
                        <br/>
                        <li className="submit">
                            <button>Sign in</button>
                        </li>
                        <br/>
                        <li className="demouser">
                            <button onClick={this.handleDemo}>Demo user</button>
                        </li>
                    </div>
                </form>
            </div>
        );
    }
}
  
export default SigninForm;