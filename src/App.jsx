import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Introduction from "./components/Introduction";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SignupSuccess from "./components/SignupSuccess";
import Content from "./components/Atast/Content";
import Profile from "./components/Atast/Profile";
import SettingsComponent from "./components/Atast/Settings";
import PrivacyPolicy from "./components/Atast/Privacy";
import SearchBar from "./components/Atast/SearchBar";
import SearchPage from "./components/Atast/SearchPage";
import Saved from "./components/Atast/Saved";
import Atast from "./components/Atast/Atast";
import Isitcom from "./components/Atast/Isitcom";
import Digitium from "./components/Atast/Digitium";
import Chat from "./components/Atast/Chat";
import Members from "./components/Atast/Members";
import Navbar from "./components/Atast/Navbar";

// Layout component for authenticated routes
const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="">
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<GetStarted />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />

        {/* Protected routes with layout */}
        <Route path="/profile" element={
          <AuthenticatedLayout>
            <Profile />
          </AuthenticatedLayout>
        } />
        <Route path="/settings" element={
          <AuthenticatedLayout>
            <SettingsComponent />
          </AuthenticatedLayout>
        } />
        <Route path="/privacy" element={
          <AuthenticatedLayout>
            <PrivacyPolicy />
          </AuthenticatedLayout>
        } />
        <Route path="/search" element={
          <AuthenticatedLayout>
            <SearchPage />
          </AuthenticatedLayout>
        } />
        <Route path="/saved" element={
          <AuthenticatedLayout>
            <Saved />
          </AuthenticatedLayout>
        } />
        <Route path="/atast" element={
          <AuthenticatedLayout>
            <Atast />
          </AuthenticatedLayout>
        } />
        <Route path="/isitcom" element={
          <AuthenticatedLayout>
            <Isitcom />
          </AuthenticatedLayout>
        } />
        <Route path="/content" element={
          <AuthenticatedLayout>
            <Content />
          </AuthenticatedLayout>
        } />
        <Route path="/chat" element={
          <AuthenticatedLayout>
            <Chat />
          </AuthenticatedLayout>
        } />
        <Route path="/digitium" element={
          <AuthenticatedLayout>
            <Digitium />
          </AuthenticatedLayout>
        } />
        <Route path="/members" element={
          <AuthenticatedLayout>
            <Members />
          </AuthenticatedLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;