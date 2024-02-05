import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/Login";

// import { useAllowedRole } from 'utils/hook/useAllowedRole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
