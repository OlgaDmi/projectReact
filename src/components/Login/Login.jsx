import React from 'react';
import './style.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(props);
    this.props = props;
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  handleSubmit(event) {
    // alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  changePage = (props, page) => {
    // console.log(props);
    props.onChangePage(page);
  }

  render() {
    return (
    <div className="login">
      <h1>Войти</h1>
      <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-field">
            <label>Имя:<em>*</em></label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="login-field">
            <label>Пароль:<em>*</em></label>
            <input type="email" value={this.state.value} onChange={this.handleChange} />
          </div>
          <input type="submit" onClick={() => this.changePage(this.props, 'Map')} className="login-btn" value="Отправить" />
      </form>
      <p onClick={() => this.changePage(this.props, 'Registration')} className="link">Зарегистрироваться</p>
    </div>
    );
  }
}

export default Login;