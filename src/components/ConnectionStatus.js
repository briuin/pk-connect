import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import singleSpaReact from "single-spa-react";
import ConnectionService from "../services/connection.service";

const useStyles = makeStyles((theme) => ({
  status: {
    color: "lime",
  },
}));

export default function ConnectionStatus() {
  const classes = useStyles();
  const tokenJSON = localStorage.getItem("token");
  const [token, setToken] = useState(tokenJSON && JSON.parse(tokenJSON).value);

  if (token) {
    useEffect(async () => {
      try {
        await fetch("https://pk-center.herokuapp.com/auth/login", {
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
    <React.Fragment>
      {token && <div className={classes.status}>connected</div>}
      {!token && (
        <div>
          <button>Play as guest</button>
          <button onClick={login}>Login PK account</button>
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
