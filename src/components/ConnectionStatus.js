import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  makeStyles,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import singleSpaReact from "single-spa-react";
import "./ConnectionStatus.css";
import jwt_decode from "jwt-decode";
import ConnectionService from "../services/connection.service";

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
  let isLoading = false;

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
        ConnectionService.setUser(jwt_decode(token));
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

  function play() {
    if (isLoading) {
      return;
    }
    isLoading = true;
    fetch("https://pk-center.herokuapp.com/auth/guest", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem(
          "token",
          JSON.stringify({ value: data.access_token })
        );
        setToken(data.access_token);
        ConnectionService.setUser(jwt_decode(data.access_token));
      })
      .finally(() => {
        isLoading = false;
      });
  }

  return (
    <React.Fragment>
      {token && <div className="pkc-status">connected</div>}
      {!token && (
        <div className="pkc-modal">
          <div className="pkc-modal-overlay"></div>
          <div className="pkc-modal-content">
            <button className="cybr-btn" onClick={play}>
              Guest<span aria-hidden>_</span>
              <span aria-hidden class="cybr-btn__glitch">
                Guest_
              </span>
              <span aria-hidden class="cybr-btn__tag">
                PK
              </span>
            </button>
            <button className="cybr-btn" onClick={login}>
              {" "}
              Login<span aria-hidden>_</span>
              <span aria-hidden class="cybr-btn__glitch">
                Login_
              </span>
              <span aria-hidden class="cybr-btn__tag">
                PK
              </span>
            </button>
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
