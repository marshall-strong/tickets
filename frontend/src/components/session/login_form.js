import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import { getQueryString } from '../../util/params_util';
import '../app.css';
import './session.css';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);

    this.setState({
      email: '',
      password: ''
    });

    this.props.clearErrors();
  }

  handleDemo(e) {
    e.preventDefault();

    const { loginRandomUser, clearErrors } = this.props;
    clearErrors();
    loginRandomUser()
      .then(() => {
        this.props.history.push(
          `/tickets/search?${getQueryString('owner', this.props.currentUser._id)}`
        )
      });
  };


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
    if (this.state.redirect){
      const path = `/tickets/owner/${this.props.session._id}`;
      return (<Redirect to={path}/>);
    }
    return (
      <div className="form-container">
        <div className="form-background"> 
        <div className="greeting-message">Get more done, together.</div>
        <form className="form" >
          <div className="opaque-session-form-background"></div>
          <div className="session-form-fields">

          <div className="session-form-instructions">Log In</div>
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
          <div className="session-buttons-container">
            <button className="btn1 session-button" onClick={this.handleSubmit}>Log In</button>
            <button className="btn1 random session-button" onClick={e => this.handleDemo(e)}>
              Demo
            </button>
          </div>
          <div className="session-form-instructions">or</div>
          <Link to="/signup" className="switch-session-form-link session-form-instructions">Sign Up</Link>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
