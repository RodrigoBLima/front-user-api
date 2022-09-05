import React from "react";

import { Provider } from "react-redux";
import { appStoreImplementation } from "../store/appStoreImplementation";

import Routes from "../routes/Routes";

function App() {
  return (
    <Provider store={appStoreImplementation}>
      <Routes />
    </Provider>
  );
}
export default App; 