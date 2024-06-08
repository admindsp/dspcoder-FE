"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ProblemFormInputs = {
  title: string;
  description: string;
  difficulty: string;
  otherDetails?: string;
};

const ProblemUpload: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProblemFormInputs>();

  const onSubmit: SubmitHandler<ProblemFormInputs> = async (data) => {
    try {
      // Assuming 'client' is a service or API client
      const response = await client.uploadProblem(data);
      console.log("Upload successful:", response);
      // Handle success message or redirect to a new page
    } catch (error) {
      console.error("Upload failed:", error);
      // Handle error message or show error notification
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Upload a New Problem
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Problem Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              id="title"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Problem Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700"
            >
              Problem Difficulty
            </label>
            <select
              {...register("difficulty", {
                required: "Difficulty is required",
              })}
              id="difficulty"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            {errors.difficulty && (
              <span className="text-red-500 text-sm">
                {errors.difficulty.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="otherDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Other Details
            </label>
            <textarea
              {...register("otherDetails")}
              id="otherDetails"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Upload Problem
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProblemUpload;
