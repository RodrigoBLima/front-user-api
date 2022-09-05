import React from "react";
import {
  BrowserRouter,
  Routes as ContentRouter,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import PrivateRoute from "./Private";
import { PublicRoute } from "./Public";

function Routes() {
  return (
    <BrowserRouter>
      <ContentRouter>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </ContentRouter>
    </BrowserRouter>
  );
}

export default Routes;