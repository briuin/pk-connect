import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { makeStyles, StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import singleSpaReact from "single-spa-react";

const generateClassName = createGenerateClassName({
  productionPrefix: "pk-connect",
});

const useStyles = makeStyles((theme) => ({
  status: {
    color: "lime",
  },
  modal: {
    position: "fixed",
    zIndex: "500",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "300px",
    height: "200px",
  },
}));

export default function ConnectionStatus() {
  const classes = useStyles();
  const tokenJSON = localStorage.getItem("token");
  const [token, setToken] = useState(tokenJSON && JSON.parse(tokenJSON).value);

  if (token) {
    useEffect(async () => {
      try {
        await fetch("https://pk-center.herokuapp.com/auth/reconnect", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (e) {
        setToken(null);
      }
    });
  }

  function login() {
    location.href = "https://pk.land/#/account/login";
  }

  return (
    <StylesProvider generateClassName={generateClassName}>
      <React.Fragment>
        {token && <div className={classes.status}>connected</div>}
        {!token && (
          <div className={classes.modal}>
            <div className={classes.modalContent}>
              <button>Play as guest</button>
              <button onClick={login}>Login PK account</button>
            </div>
          </div>
        )}
      </React.Fragment>
    </StylesProvider>
  );
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ConnectionStatus,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
