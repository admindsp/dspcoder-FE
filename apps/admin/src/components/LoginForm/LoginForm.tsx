"use client";

import React, { useState, FormEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

interface LoginResponse {
  token: string;
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:8005/auth/login/",
        {
          email,
          password,
        },
      );
      const token = response.data.token;
      toast.success("Successfully logged in.");
      localStorage.setItem("token", token);
      login();
      router.push("/");
    } catch (error: any) {
      console.error("Error logging in:", error);
      toast.error("Either username or password is wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-black">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="text-black border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="text-black border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
