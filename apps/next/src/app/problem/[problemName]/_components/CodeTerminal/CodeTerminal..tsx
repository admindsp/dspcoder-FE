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
    });
    xterm.open(terminalRef.current);

    xterm.write("DSP Coder Terminal:\r\n");

    xterm.onData((data) => {
      xterm.write(data);
    });

    return () => xterm.dispose();
  }, []);

  return <div ref={terminalRef} className="w-full h-full bg-darkish"></div>;
};

export default CodeTerminal;
