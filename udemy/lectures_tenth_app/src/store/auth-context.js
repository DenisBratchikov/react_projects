import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const tokenExpTime = localStorage.getItem('tokenExpTime');
  if (new Date().getTime() > +tokenExpTime) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpTime');
    return {};
  }
  return { token: storedToken, duration: tokenExpTime };
};

export const AuthContextProvider = (props) => {
  const storedData = retrieveStoredToken();
  const [token, setToken] = useState(storedData.token);
  const userIsLoggedIn = Boolean(token);
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpTime');
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpTime', new Date().getTime() + expirationTime);
    logoutTimer = setTimeout(logoutHandler, expirationTime);
  };

  useEffect(() => {
    if (storedData.duration) {
      logoutTimer = setTimeout(logoutHandler, storedData.duration);
    }
  }, [storedData]);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
