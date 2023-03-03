import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "../pages/Startpage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ViewVocabulary from "../pages/ViewVocabulary";
import CreateVocabulary from "../pages/CreateVocabulary";
import EditVocabulary from "../pages/EditVocabulary";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="viewVocabulary" element={<ViewVocabulary />} />
        <Route path="/" element={<Startpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Create" element={<CreateVocabulary />} />
        <Route path="Edit" element={<EditVocabulary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
