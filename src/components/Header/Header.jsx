import React from 'react';
import Menu from '../Menu/Menu';
import './style.scss';

function Header(props) {
    return (
        <header className="App-header">
          <p>
            Loft Taxi - {props.pageName}
          </p>
        <Menu onChangePage={props.onChangePage}/>
        </header>
    );
  }
  
  export default Header;