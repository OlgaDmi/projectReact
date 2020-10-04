import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authenticate} from '../../actions';
import {Link} from 'react-router-dom';
import './style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.props = props;
  }

  onChangePassword(event){
    this.setState({userPassword: event.target.value});
  }

  onChangeEmail(event) { 
    this.setState({userEmail: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  changePage = (props, page) => {
    props.onChangePage(page);
  }

  authenticate = (event) => {
    event.preventDefault();
    this.props.authenticate(this.state.userEmail, this.state.userPassword);
  };

  render() {
    return (
      <div className="content--background">
        <div className="login">
          {this.props.isLoggedIn ? (
              <p>
              You are logged in. <Link to="/profile">Go to profile</Link>
            </p>
        ) : (
          <>
          <h1>Войти</h1>
          <form onSubmit={this.authenticate} className="login-form">
              <div className="login-field">
                <label>Email:<em>*</em></label>
                <input type="email" name="userName" value={this.state.userEmail} onChange={this.onChangeEmail} placeholder=""/>
              </div>
              <div className="login-field">
                <label>Пароль:<em>*</em></label>
                <input type="text" name="userPassword" value={this.state.userPassword} onChange={this.onChangePassword} placeholder=""/>
              </div>
              <input type="submit" className="login-btn btn btn--yellow" value="Отправить" />
          </form>
          <Link className="link" to="/registration">Зарегистрироваться</Link>
          </>
        )}
        </div>
    </div>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  authenticate: PropTypes.func,
};

export const LoginWithConnect = connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Login);