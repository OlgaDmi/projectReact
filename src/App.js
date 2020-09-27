import React from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Map from './components/Map/Map';
import Profile from './components/Profile/Profile';
import Registration from './components/Registration/Registration';
import PropTypes from 'prop-types';
import {UserContext} from './context';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logIn = (email, password) => {
      if (email === 'test@test.com' && password === '123123') {
        this.setState(state => ({
          isLoggedIn: true
        }));
        alert('Вы зарегистрированы!');
        return true;
      } else {
        alert('Вы ввели некорректные данные!');
        return false;
      } 
    };
    
    this.logOut = () => {
      this.setState(state => ({
        isLoggedIn: false
      }));
      alert('Вы вышли!');
    };

    this.state = {
      pageName: 'Login',
      isLoggedIn: false,  
      logIn: this.logIn,
      logOut: this.logOut
     };
  }

  changePage = (pageName) => {
    if (this.state.isLoggedIn === false && (pageName === 'Map' || pageName === 'Profile')) {
      alert('Сначала войдите');
    } else {
      this.setState({pageName: pageName});
    }
  }

  getpage(page) {
    switch (page) {
      case 'Map':
        return <Map/>;
      case 'Profile':
        return <Profile/>;
      case 'Registration':
        return <Registration onChangePage={this.changePage}/>; 
      case 'Login':  
      default:
        return <Login onChangePage={this.changePage}/>;
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
    <div className="App">
      <Header pageName={this.state.pageName + ' Page'} onChangePage={this.changePage}/>
      <div className="content">
        {this.getpage(this.state.pageName)}
      </div>
    </div>
    </UserContext.Provider>
    );
  }
}

App.propTypes = {
  onChangePage: PropTypes.func,
  pageName: PropTypes.string
};

export default App;
