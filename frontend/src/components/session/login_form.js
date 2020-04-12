import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import '../app.css';
import './session.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: this.props.session._id
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
        <form className="form" >
          <img 
            className="cat-hat" 
            alt="cat" 
            src="https://i.pinimg.com/originals/cd/db/80/cddb8020bf0d4605c1e11fc6d97eaace.png"
          ></img>

          <input 
            className="form-box-login" 
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder={this.props.errors.email ? this.props.errors.email : "Email"}
          />

          <input 
            className="form-box-login" 
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder={this.props.errors.password ? this.props.errors.password : "Password"}
          />

          <button className="button1" onClick={this.handleSubmit}>Log In</button>

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
