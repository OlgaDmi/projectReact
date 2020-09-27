import React from 'react';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';
import './style.scss';

const Header = (props) => {
    return (
        <header className="App-header">
          <p>
            Loft Taxi - {props.pageName}
          </p>
        <Menu onChangePage={props.onChangePage}/>
        </header>
    );
  }
  
  Header.propTypes = {
    onChangePage: PropTypes.func,
    pageName: PropTypes.string
  };

  export default Header;