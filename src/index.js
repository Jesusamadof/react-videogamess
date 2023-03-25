import ReactDOM from "react-dom";

import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="videogamess.us.auth0.com"
    clientId="ZEl02Ro17dWDIcYsoFgqP6vTDp2eVAqt"
    redirectUri={window.location.origin + process.env.PUBLIC_URL + '/'}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);