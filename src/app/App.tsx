import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/layouts";

// import { useAllowedRole } from 'utils/hook/useAllowedRole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
