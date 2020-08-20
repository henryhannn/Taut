import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            full_name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
  
    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
  
    render() {
        return (
            <div className="signin-form-container">
            <form onSubmit={this.handleSubmit} className="signin-form-box">
                Taut
                <br/>
                Please {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <div className="signin-form">
                <br/>
                <label>Email address:
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="signin-input"
                    />
                </label>
                <br/>
                <label>Full Name:
                    <input type="text"
                        value={this.state.full_name}
                        onChange={this.update('full_name')}
                        className="signin-input"
                    />
                </label>
                <br/>
                <label>Password:
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="signin-input"
                    />
                </label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
                </div>
            </form>
            </div>
        );
    }
}
  
export default SessionForm;