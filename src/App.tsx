import React, { StrictMode } from "react";
import AppRouter from "./Router";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
