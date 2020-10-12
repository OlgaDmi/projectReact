import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { registration } from "../../actions";
import "./style.scss";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      surname: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.props = props;
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangeName(event) {
    this.setState({ name: event.target.value });
  }

  onChangeSurname(event) {
    this.setState({ surname: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  registration = (event) => {
    event.preventDefault();
    this.props.registration(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.surname,
    );
  };

  render() {
    return (
      <div className="content--background">
        {this.props.isLoggedIn ? (
          <Redirect to="/map" />
        ) : (
          <>
            <div className="registration">
              <h1>Регистрация</h1>
              <p>
                Уже зарегистрированы?{" "}
                <Link className="link" to="/login">
                  Войти
                </Link>
              </p>
              <form onSubmit={this.registration} className="registration-form">
                <div className="registration-field">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    placeholder="Адрес электронной почты:*"
                    required="required"
                  />
                </div>
                <div className="registration-field">
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    placeholder="Имя:*"
                    required="required"
                  />
                  <input
                    type="text"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.onChangeSurname}
                    placeholder="Фамилия:*"
                    required="required"
                  />
                </div>
                <div className="registration-field">
                  <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    placeholder="Пароль:*"
                    required="required"
                  />
                </div>
                <input
                  type="submit"
                  className="registration-btn btn btn--yellow"
                  value="Войти"
                />
              </form>
            </div>
          </>
        )}
      </div>
    );
  }
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
  registration: PropTypes.func,
};

export const RegistrationWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { registration },
)(Registration);
