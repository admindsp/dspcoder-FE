"use client";

import React, { useEffect, useState } from "react";
import ProblemsListFilter from "./ProblemsListFilter";
import axios from "axios";

const ProblemsSection = () => {
  const [problems, setProblems] = useState([]);

  return (
    <div>
      <ProblemsListFilter />
    </div>
  );
};

export default ProblemsSection;
