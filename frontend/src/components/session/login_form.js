import React from 'react';
import { withRouter } from 'react-router-dom';
import '../app.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tickets');
        }

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        
        this.props.login(user)
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder={this.props.errors.email ? this.props.errors.email : "Email"}
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder={this.props.errors.password ? this.props.errors.password : "Password"}
                        />
                        <br />
                        <button className="button1">Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm)