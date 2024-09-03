import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { routesConfig } from "./routesConfig";
import secureLocalStorage from "react-secure-storage";

const App = () => {
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  const canAccessRoute = (route) => {
    if (RoleUser === 'SuperAdmin' || RoleUser === 'Admin') {
      return true;
    }
    return route.roles ? route.roles.includes(RoleUser) : false;
  };

  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route) => {
          if (route.children) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  canAccessRoute(route) ? (
                    <PrivateRoute>{route.element}</PrivateRoute>
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              >
                {route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={
                      canAccessRoute(route) ? (
                        <PrivateRoute>{child.element}</PrivateRoute>
                      ) : (
                        <Navigate to="/" replace />
                      )
                    }
                  />
                ))}
              </Route>
            );
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                canAccessRoute(route) ? (
                  <PrivateRoute>{route.element}</PrivateRoute>
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          );
        })}
        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
