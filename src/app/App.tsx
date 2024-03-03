import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/index";
import { IProtectedRoute, IRoute } from "utils/routes/types";
import { routeConstants } from "utils/constants";
import { useAllowedRole } from "utils/hook/useAllowedRole";
import { Layout } from "./Pages/Layout";
import { routes } from "utils/routes";
import React from "react";
import { v4 as uuid } from "uuid";
const ProtectedRoute = (props: IProtectedRoute) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={routeConstants.login} />;
  }
  useAllowedRole({ allowedRole: props.allowedRole });
  return <>{props.children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigate replace={true} to="/login" />} path="/" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
      <Routes>
        {routes.map((route: IRoute) => (
          <React.Fragment key={uuid()}>
            {route.isProtected ? (
              <Route
                element={
                  <ProtectedRoute allowedRole={route.allowedRole}>
                    {route.needsLayout ? (
                      <Layout>{route.element}</Layout>
                    ) : (
                      route.element
                    )}
                  </ProtectedRoute>
                }
                path={route.path}
              />
            ) : (
              <Route element={route.element} path={route.path} />
            )}
          </React.Fragment>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
