import "./App.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/auth/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/ui/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
