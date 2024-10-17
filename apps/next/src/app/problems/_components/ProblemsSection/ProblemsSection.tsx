"use client";
import React, { useEffect, useState } from "react";
import ProblemsListFilter from "./ProblemsListFilter";
import axios from "axios";
import ProblemSelection from "./ProblemSelection";

const ProblemsSection = () => {
  return (
    <div>
      <ProblemSelection />
      <ProblemsListFilter />
    </div>
  );
};

export default ProblemsSection;
