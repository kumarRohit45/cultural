import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Loginas from "./pages/Loginas";
import Signuppartner from "./pages/Signuppartner";
import Customtrip from "./pages/Customtrip";
import Userdetails from "./pages/Userdetails";
import DashboardPartner from "./pages/DashboardPartner";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-partner" element={<DashboardPartner />} />
        <Route path="/dashboard-admin" element={<AdminDashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/loginas" element={<Loginas />} />
        <Route path="/signup-partner" element={<Signuppartner />} />
        <Route path="/customtrip" element={<Customtrip />} />
        <Route path="/userdetails" element={<Userdetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
