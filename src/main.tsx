import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./app/App";
import { configureAppStore } from "./store/configureStore";
import { theme } from "./styles/theme";
import Toast from "app/Components/ui/Toast";
const store = configureAppStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Toast>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </Toast>
  </Provider>
);
