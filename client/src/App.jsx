import React from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "./layout";
import {
  AboutUsPage,
  ContactsPage,
  DoctorDetailsPage,
  DoctorsPage,
  HomePage,
  ProfilePage,
  StatisticsPage,
} from "./pages";
import LoginPage from "./pages/Profile/login/login";
import RegisterPage from "./pages/Profile/register/register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="contact" element={<ContactsPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="me" element={<ProfilePage />} />
        <Route path="/doctor_details/:doctorId" element={< DoctorDetailsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
