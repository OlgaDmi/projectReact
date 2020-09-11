import React from 'react';

let changePage = (props, page) => {
    props.onChangePage(page);
}

function Menu(props) {
    return (
    <ul className="nav">
        <li onClick={() => changePage(props, 'Map')}>Карта</li>
        <li onClick={() => changePage(props, 'Profile')}>Профиль</li>
        <li onClick={() => changePage(props, 'Login')}>Логин</li>
    </ul> 
      );
}

export default Menu;