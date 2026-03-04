import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import { store } from "./redux/store";

import App from "./App.tsx";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = createRoot(rootElem);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
}
