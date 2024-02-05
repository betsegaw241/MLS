import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUpPage from "./Pages/createAccountPage";

// import { useAllowedRole } from 'utils/hook/useAllowedRole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignUpPage />} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
