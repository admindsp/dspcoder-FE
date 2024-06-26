"use client";

import React from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import ProblemUpload from "@/components/ProblemUpload/ProblemUpload";
import AuthGuard from "@/components/AuthGuard/AuthGuard";

const AdminPage = () => {
  return (
    <AuthGuard>
      <div className="font-bold text-2xl border-b-2 py-4 border-gray-600">
        Admin Portal
      </div>
      <div className="flex gap-4">
        <Dashboard />
        <ProblemUpload />
      </div>
    </AuthGuard>
  );
};

export default AdminPage;
