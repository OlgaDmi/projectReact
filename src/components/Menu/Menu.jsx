import React from 'react';
import {logIn, logOut} from '../../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class Menu extends React.Component {
  constructor(props) {
    super(props); 
  }

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() { 
    return (   
      <ul className="nav">
        <li><Link to="/map">Карта</Link></li>
        <li><Link to="/profile">Профиль</Link></li>
        <li onClick={this.unauthenticate}><a href="#">Выйти</a></li>
      </ul> 
    );
  }
}

export const MenuWithConnect = connect(
  null,
  { logIn, logOut }
)(Menu);