import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props = props;
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  changePage = (props, page) => {
    props.onChangePage(page);
  }

  render() {
    return (
    <div className="registration">
      <h1>Регистрация</h1>
      <p>Уже зарегистрированы? <span className="link" onClick={() => this.changePage(this.props, 'Login')}>Войти</span></p>
      <form onSubmit={this.handleSubmit} className="registration-form">
          <div className="registration-field">
            <label>Имя:<em>*</em></label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="registration-field">
            <label>Пароль:<em>*</em></label>
            <input type="email" value={this.state.value} onChange={this.handleChange} />
          </div>
          <input type="submit" onClick={() => this.changePage(this.props, 'Map')} className="registration-btn" value="Отправить" />
      </form>
    </div>
    );
  }
}

Registration.propTypes = {
  onChangePage: PropTypes.func
};

export default Registration;