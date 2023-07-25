import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Actions from "../pages/Actions";
import Tasks from "../pages/Tasks";
import TaskDetail from "../pages/TaskDetail";
import AuthLayout from "../components/Layout/AuthLayout";
import GuestLayout from "../components/Layout/GuestLayout";
import Login from "../pages/auth/Login";
import Profile from "../pages/Profile";
import Blank from "../pages/Blank";
import NotFound from "../pages/NotFound";
import Form from "../pages/Form";
import RegisterIndex from "../pages/auth/Register";
import { auth } from "~firebase";

function App() {

  const isLoggedIn = auth.currentUser != null; // Set this to true if the user is logged in
  
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<RegisterIndex />}></Route>
      </Route>
      <Route path="/dashboard" element={<AuthLayout />}>  
        {/* Routes for authenticated users */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/actions" element={<Actions />}></Route>
        <Route path="/dashboard/tasks" element={<Tasks />}></Route>
        <Route path="/dashboard/tasks/detail/:taskId" element={<TaskDetail/>}></Route>
        <Route path="/dashboard/eval" element={<NotFound />}></Route>
        <Route path="/dashboard/blank" element={<Blank />}></Route>
        <Route path="/dashboard/404" element={<NotFound />}></Route>
        <Route path="/dashboard/form" element={<Form />}></Route>
        <Route path="/dashboard/profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
