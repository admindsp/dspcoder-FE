import React, { useState } from "react";
import axios from "axios";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@dspcoder/ui/components/ui/dialog";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register/",
        {
          email,
          password,
        }
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <DialogContent className="bg-darkish">
      <DialogHeader>
        <DialogTitle>Sign Up</DialogTitle>
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
            Sign Up
          </button>
        </form>
      </DialogHeader>
    </DialogContent>
  );
};

export default Signup;
