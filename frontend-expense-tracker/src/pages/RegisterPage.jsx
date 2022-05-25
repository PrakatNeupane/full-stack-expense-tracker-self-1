import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Register } from "../components/register/Register";

export const RegisterPage = () => {
  return (
    <MainLayout>
      <Register />
      {/* this is passed as the children component to the main layout */}
    </MainLayout>
  );
};
