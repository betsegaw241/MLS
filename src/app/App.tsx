import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/Login/index";
import { IProtectedRoute, IRoute } from "utils/routes/types";
import { routeConstants } from "utils/constants";
import { useAllowedRole } from "utils/hook/useAllowedRole";
import { Layout } from "./Pages/Layout";
import { GlobalStyle } from "styles/global-styles";
import { routes } from "utils/routes";
import React from "react";
import { v4 as uuid } from "uuid";

// import { useAllowedRole } from 'utils/hook/useAllowedRole';
const ProtectedRoute = (props: IProtectedRoute) => {
  if (!localStorage.getItem("token")) {
    console.log('invalid')
    return <Navigate to={routeConstants.login} />;
  }
  console.log('in ')
  useAllowedRole({ allowedRole: props.allowedRole });
  return <>{props.children}</>;
};

function App() {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route element={<Navigate replace={true} to="/login" />} path="/" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
      <Layout>
        <Routes>
          {routes.map((route: IRoute) => (
            <React.Fragment key={uuid()}>
              {route.isProtected ? (
                <Route
                  element={
                    <ProtectedRoute allowedRole={route.allowedRole}>
                      {route.element}
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
