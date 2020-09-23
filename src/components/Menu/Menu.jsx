import React from 'react';
import PropTypes from 'prop-types';
import {UserContext} from '../../context';
let changePage = (props, page) => {
    props.onChangePage(page);
}

const Menu = (props) => {
    return (
      <UserContext.Consumer>
        {({logOut}) => (        
          <ul className="nav">
            <li onClick={() => changePage(props, 'Map')}>Карта</li>
            <li onClick={() => changePage(props, 'Profile')}>Профиль</li>
            <li onClick={() => changePage(props, 'Login')}>Логин</li>
            <li onClick={logOut}>Выйти</li>
          </ul> 
        )}
      </UserContext.Consumer>
      );
}

Menu.propTypes = {
    onChangePage: PropTypes.func
  };

export default Menu;