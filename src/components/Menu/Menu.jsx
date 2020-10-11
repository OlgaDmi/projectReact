import React from "react";
import { logIn, logOut } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <ul className="nav">
        <li>
          <Link to="/map">Карта</Link>
        </li>
        <li>
          <Link to="/profile">Профиль</Link>
        </li>
        <li>
          <button onClick={this.unauthenticate}>Выйти</button>
        </li>
      </ul>
    );
  }
}
export const MenuWithConnect = connect(null, { logIn, logOut })(Menu);
