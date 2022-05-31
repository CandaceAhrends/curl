import React from "react";
import SideMenu from "./components/menu/SideMenu";
import Parser from "./components/parser";
import Curls from "./components/curls";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./app.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="app-container">
          <SideMenu></SideMenu>
          <div>
            <Routes>
              <Route path="/curl" element={<Curls />} />
              <Route path="/parser" element={<Parser />}>
                <Route path=":id" element={<Parser />} />
              </Route>

              <Route path="*" element={<Parser />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
