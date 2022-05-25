import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Login } from "../components/login/Login";

export const LoginPage = () => {
  return (
    <MainLayout>
      {/* this is passed as the children component to the main layout */}
      <Login></Login>
    </MainLayout>
  );
};
