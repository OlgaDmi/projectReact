import React from "react";
import masterCard from "./masterCard.svg";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendCard } from "../../actions";
import "./style.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cardDate: "",
      cardUserName: "",
      cardCvc: "",
    };
    this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
    this.onChangeCardDate = this.onChangeCardDate.bind(this);
    this.onChangeCardUserName = this.onChangeCardUserName.bind(this);
    this.onChangeCardCvc = this.onChangeCardCvc.bind(this);
    this.props = props;
  }
  onChangeCardNumber(event) {
    this.setState({ cardNumber: event.target.value });
  }
  onChangeCardDate(event) {
    this.setState({ cardDate: event.target.value });
  }
  onChangeCardUserName(event) {
    this.setState({ cardUserName: event.target.value });
  }
  onChangeCardCvc(event) {
    this.setState({ cardCvc: event.target.value });
  }
  sendCard = (event) => {
    event.preventDefault();
    this.props.sendCard(
      this.state.cardNumber,
      this.state.cardDate,
      this.state.cardUserName,
      this.state.cardCvc,
    );
  };
  render() {
    return (
      <>
        <Header />
        <div className="content">
          <div className="content--background">
            <div className="profile">
              <h1>Профиль</h1>
              <p className="profile-h">Способ оплаты</p>
              <form className="profile-form" onSubmit={this.sendCard}>
                <div className="profile-form__inner">
                  <div className="profile-block">
                    <div className="profile-block__head">
                      <img src={masterCard} alt="master card" />
                    </div>
                    <div className="profile-block__inner">
                      <div className="profile-field">
                        <label>
                          Номер карты:<em>*</em>
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={this.state.cardNumber}
                          onChange={this.onChangeCardNumber}
                          placeholder="0000 0000 0000 0000"
                          required="required"
                        />
                        <p className="profile-error__text">
                          Это обязательное поле
                        </p>
                      </div>
                      <div className="profile-field">
                        <input
                          type="date"
                          name="cardDate"
                          value={this.state.cardDate}
                          onChange={this.onChangeCardDate}
                          placeholder="09/20"
                          required="required"
                        />
                        <p className="profile-error__text">
                          Это обязательное поле
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-block">
                    <div className="profile-block__inner">
                      <div className="profile-field">
                        <label>
                          Имя владельца:<em>*</em>
                        </label>
                        <input
                          type="text"
                          name="cardUserName"
                          value={this.state.cardUserName}
                          onChange={this.onChangeCardUserName}
                          placeholder="USER NAME"
                          required="required"
                        />
                        <p className="profile-error__text">
                          Это обязательное поле
                        </p>
                      </div>
                      <div className="profile-field">
                        <label>
                          CVC:<em>*</em>
                        </label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={this.state.cardCvc}
                          onChange={this.onChangeCardCvc}
                          placeholder="CVC"
                          required="required"
                        />
                        <p className="profile-error__text">
                          Это обязательное поле
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  className="profile-btn btn btn--yellow"
                  value="Отправить"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Profile.propTypes = {
  authenticate: PropTypes.func,
};

export const ProfileWithConnect = connect(null, { sendCard })(Profile);
