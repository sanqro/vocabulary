import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "../pages/Startpage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ViewVocabulary from "../pages/ViewVocabulary";
import CreateVocabulary from "../pages/CreateVocabulary";
import EditVocabulary from "../pages/EditVocabulary";
import LearnVocabulary from "../pages/LearnVocabulary";
import ProtectedRoutes from "./ProtectedRoutes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Startpage />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="view" element={<ViewVocabulary />} />
          <Route path="Create" element={<CreateVocabulary />} />
          <Route path="Edit" element={<EditVocabulary />} />
          <Route path="Learn" element={<LearnVocabulary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
