import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@dspcoder/ui/components/ui/dialog";
import React from "react";

type Props = {};

const AuthPopupContent = (props: Props) => {
  return (
    <DialogContent className="bg-darkish">
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <form onSubmit={() => alert("hello")} className="flex flex-col gap-4">
          <input
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="text-black border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
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

export default AuthPopupContent;
