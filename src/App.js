import React from "react";
import { LoginWithConnect } from "./components/Login/Login";
import Map from "./components/Map/Map";
import { ProfileWithConnect } from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
class App extends React.Component {
  privatePage = (pagePath) => {
    if (this.props.isLoggedIn & (pagePath === "/map")) {
      return <Map />;
    } else if (this.props.isLoggedIn & (pagePath === "/profile")) {
      return <ProfileWithConnect />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  render() {
    return (
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/map" render={() => this.privatePage("/map")} />
            <Route
              path="/profile"
              render={() => this.privatePage("/profile")}
            />
            <Route path="/registration" component={Registration} />
            <Route component={LoginWithConnect} />
          </Switch>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
