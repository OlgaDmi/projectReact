import React from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Map from './components/Map/Map';
import Profile from './components/Profile/Profile';
import Registration from './components/Registration/Registration';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: 'Login'
    };
  }

  changePage = (pageName) => {
    this.setState({pageName: pageName});
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
    <div className="App">
      <Header pageName={this.state.pageName + ' Page'} onChangePage={this.changePage}/>
      {this.getpage(this.state.pageName)}
    </div>
    );
  }
}

export default App;
