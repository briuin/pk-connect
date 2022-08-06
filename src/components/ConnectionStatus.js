import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  makeStyles,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import singleSpaReact from "single-spa-react";
import './ConnectionStatus.css';

const generateClassName = createGenerateClassName({
  seed: "pk-connect",
  productionPrefix: "pk-connect",
});

/*const useStyles = makeStyles((theme) => ({
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
}));*/

export default function ConnectionStatus() {
  // const classes = useStyles();
  const tokenJSON = localStorage.getItem("token");
  const [token, setToken] = useState(tokenJSON && JSON.parse(tokenJSON).value);

  useEffect(async () => {
    if (!token) {
      return;
    }

    await fetch("https://pk-center.herokuapp.com/auth/reconnect", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        return response;
      })
      .catch((e) => {
        localStorage.removeItem("token");
        setToken(null);
      });
  }, []);

  function login() {
    location.href = "https://pk.land/#/account/login";
  }

  return (
      <React.Fragment>
        {token && <div className='pkc-status'>connected</div>}
        {!token && (
          <div className='pkc-modal'>
            <div className='pkc-modal-content'>
              <button>Play as guest</button>
              <button onClick={login}>Login PK account</button>
            </div>
          </div>
        )}
      </React.Fragment>
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
