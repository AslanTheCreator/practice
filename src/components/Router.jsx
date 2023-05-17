import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Articles from '../pages/Articles/Articles';
import Profile from '../pages/Profile';
import Layout from '../layouts/Layout';
import Login from '../pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="" />
          <Route element={<Articles />} path="articles" />
          <Route element={<Profile />} path="profile" />
          <Route element={<Login />} path="login" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
