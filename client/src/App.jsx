import React from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "./layout";
import {
  AboutUsPage,
  AddDoctorPage,
  AddSchedulePage,
  AddUserPage,
  ContactsPage,
  DoctorDetailsPage,
  DoctorsPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  StatisticsPage,
} from "./pages";


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
        <Route
          path="/doctor_details/:doctorId"
          element={<DoctorDetailsPage />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="add-doctor" element={<AddDoctorPage />} />
        <Route path="add-user" element={<AddUserPage />} />
        <Route path="add-schedule" element={<AddSchedulePage />} />
      </Route>
    </Routes>
  );
};

export default App;
