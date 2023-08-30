import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mainRoutes } from "../../utils/routeList.js";
import { Public_Routes } from "./PublicRoutes";
import { Private_Routes } from "./Private_Routes";

export const RouterApp = () => {
 
  return (
    <Router>
      <Routes>
        <Route element={<Public_Routes />}>
          {React.Children.toArray(
            mainRoutes.map((route) => {
              const { caption, linkTo, element, authRequired } = route;
              return  <Route element={element} path={linkTo} />;
            })
          )}
        </Route>
        <Route element={<Private_Routes />}>
          {React.Children.toArray(
            mainRoutes.map((route) => {
              const { caption, linkTo, element, authRequired } = route;
              return <Route element={element} path={linkTo} />;
            })
          )}
        </Route>
      </Routes>
    </Router>
  );
};
