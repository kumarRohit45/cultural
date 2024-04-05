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
import Cabregister from "./pages/Cabregister";
import Trippackage from "./pages/Trippackage";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import OnlyPartnerPrivateRoute from "./components/OnlyPartnerPrivateRoute";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/dashboard-admin" element={<AdminDashboard />} />
        </Route>
        <Route element={<OnlyPartnerPrivateRoute />}>
          <Route path="/dashboard-partner" element={<DashboardPartner />} />
          <Route path="/cabregister" element={<Cabregister />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/loginas" element={<Loginas />} />
        <Route path="/signup-partner" element={<Signuppartner />} />
        <Route path="/customtrip" element={<Customtrip />} />
        <Route path="/userdetails" element={<Userdetails />} />
        <Route path="/trippackage" element={<Trippackage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
