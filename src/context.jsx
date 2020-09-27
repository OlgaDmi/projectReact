import React from 'react';

export const UserContext = React.createContext({
  isLoggedIn: false,  
  logIn: (email, password) => {},
  logOut: () => {}
});
