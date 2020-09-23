import React from 'react';
import PropTypes from 'prop-types';
import {UserContext} from '../../context';
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

  render() {
    return (
    <div className="login">
      <h1>Войти</h1>
      <UserContext.Consumer>
      {({logIn}) => ( 
      <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-field">
            <label>Email:<em>*</em></label>
            <input type="email" name="userName" value={this.state.userEmail} onChange={this.onChangeEmail} placeholder=""/>
          </div>
          <div className="login-field">
            <label>Пароль:<em>*</em></label>
            <input type="text" name="userPassword" value={this.state.userPassword} onChange={this.onChangePassword} placeholder=""/>
          </div>
          <input type="submit" onClick={() => logIn(this.state.userEmail, this.state.userPassword)} className="login-btn" value="Отправить" />
      </form>
      )}
      </UserContext.Consumer>
      <p onClick={() => this.changePage(this.props, 'Registration')} className="link">Зарегистрироваться</p>
    </div>
    );
  }
}

Login.propTypes = {
  onChangePage: PropTypes.func
};

export default Login;