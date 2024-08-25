"use client";
import React, { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";

const CodeTerminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const xterm = new Terminal({
      cursorBlink: true,
      rows: 30,
      cols: 80,
      theme: {
        background: "#1e1e1e", // Dark background
        foreground: "#ffffff", // White text
      },
    });
    xterm.open(terminalRef.current);

    xterm.write("Type something:\r\n");

    xterm.onData((data) => {
      xterm.write(data);
    });

    return () => xterm.dispose();
  }, []);

  return <div ref={terminalRef} className="w-full bg-black"></div>;
};

export default CodeTerminal;
