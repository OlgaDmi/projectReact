import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.props = props;
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="content--background">
        <div className="registration">
          <h1>Регистрация</h1>
          <p>
            Уже зарегистрированы?{" "}
            <Link className="link" to="/login">
              Войти
            </Link>
          </p>
          <form onSubmit={this.handleSubmit} className="registration-form">
            <div className="registration-field">
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Имя:*"
                required="required"
              />
            </div>
            <div className="registration-field">
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Пароль:*"
                required="required"
              />
            </div>
            {/* <input type="submit" onClick={() => this.changePage(this.props, 'Map')} className="registration-btn" value="Отправить" /> */}
          </form>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  onChangePage: PropTypes.func,
};

export default Registration;
