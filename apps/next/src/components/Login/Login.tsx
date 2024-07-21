import React, { useState } from "react";
import axios from "axios";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@dspcoder/ui/components/ui/dialog";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8005/auth/login/", {
        email,
        password,
      });
      toast.success("Successfully logged in.");
      console.log("User logged in:", response.data);
      router.push("/problems");
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Either username or password is wrong.");
    }
  };

  return (
    <DialogContent className="bg-darkish">
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
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
      </DialogHeader>
    </DialogContent>
  );
};

export default Login;
