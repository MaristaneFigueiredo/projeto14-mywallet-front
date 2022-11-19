import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { ContextProvider } from "./contexts/context";
import React from "react";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import RecordsPage from "./pages/RecordsPage";
import EntryExitPage from "./pages/EntryExitPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ContextProvider>
        <Routes>
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/cadastro" element={<SignUpPage />}></Route>
          <Route path="/home" element={<RecordsPage />}></Route>
          <Route
            path="/nova-entrada"
            element={<EntryExitPage ehEntrada={true} />}
          ></Route>
          <Route
            path="/nova-saida"
            element={<EntryExitPage ehEntrada={false} />}
          ></Route>
          <Route exact path="/" element={<Navigate to="/login" />}>
            {" "}
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
