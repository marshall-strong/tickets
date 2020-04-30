import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import '../app.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      redirect: this.props.session.isAuthenticated
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user);
    
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    });

    this.props.clearErrors();
  }


  redirectToOwnerPage = () => {
    const path = `/tickets/owner/${this.props.session._id}`;
    this.props.history.push(path);
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.session._id !== prevProps.session._id) {
      this.redirectToOwnerPage();
    }
  }


  componentWillUnmount() {
    this.props.clearErrors();
  }


  render() {
    if (this.state.redirect) {
      const path = `/tickets/owner/${this.props.session._id}`;
      return (<Redirect to={path} />);
    }
    return (
      <div className="form-container">
        <div className="greeting-message">Get more done, together.</div>

        <form className="form">
          <div className="opaque-session-form-background"></div>
          <div className="session-form-fields">
            <div className="session-form-instructions"> Sign Up </div>
          <input 
            className="form-box" 
            type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            placeholder={ this.props.errors.firstName ? this.props.errors.firstName : "First Name"}
          />

          <input 
            className="form-box" 
            type="text"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            placeholder={this.props.errors.lastName ? this.props.errors.lastName : "Last Name"}
          />

          <input 
            className="form-box" 
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder={this.props.errors.email ? this.props.errors.email : "Email"}
          />

          <input 
            className="form-box" 
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder={this.props.errors.password ? this.props.errors.password : "Password"}
          />

          <input 
            className="form-box" 
              type="password"
            value={this.state.password2}
            onChange={this.update('password2')}
            placeholder={this.props.errors.password2 ? this.props.errors.password2 : "Confirm Password"}
          />
          
          <button className="btn1 session-button session-buttons-container" onClick={this.handleSubmit}>Submit</button>
            <div className="session-form-instructions">or</div>
            <Link to="/login" className="switch-session-form-link session-form-instructions">Log In</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
