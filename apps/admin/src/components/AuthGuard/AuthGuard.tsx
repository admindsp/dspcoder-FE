"use client";

import React from "react";
import { useAuth } from "@/providers/AuthProvider";
import LoginForm from "@/components/LoginForm/LoginForm";

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <>{children}</>;
};

export default AuthGuard;
