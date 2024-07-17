import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  HomePage,
} from "./routes/Routes.js";
import {
  AdminDashboardPage,
  AdminDashboardAddQuote,
  AdminDashboardEditQuote,
  AdminDashboardAllQuotes
} from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import {  loadUser } from "./redux/actions/user";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

const App = () => {

 
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />       
       
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
       
        <Route
          path="/admin-create-quote"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardAddQuote />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-edit-quote/:id"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEditQuote />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-all-quotes"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardAllQuotes />
            </ProtectedAdminRoute>
          }
        />

      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;