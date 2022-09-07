import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import LogIn from "./pages/login";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import DonationForm from "./pages/DonationForm";
import Home from "./pages/Home";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import Donors from "./pages/Donors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(247,224,63,255)",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/donate"
            element={
              <PrivateRoute>
                <DonationForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/donors"
            element={
              <PrivateRoute>
                <Donors />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
