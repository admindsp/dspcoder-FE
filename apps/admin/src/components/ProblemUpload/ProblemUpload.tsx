"use client";
import axios from "axios";
import React from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

type Example = {
  input: string;
  output: string;
  image?: FileList;
};

type ProblemFormInputs = {
  title: string;
  description: string;
  difficulty: string;
  questionType: string;
  keywords?: string[];
  questionImages?: FileList;
  examples: Example[];
};

const ProblemUpload: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<ProblemFormInputs>({
    defaultValues: {
      examples: [{ input: "", output: "", image: undefined }],
      keywords: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "examples",
  });

  const {
    fields: keywordFields,
    append: appendKeyword,
    remove: removeKeyword,
  } = useFieldArray({
    control,
    name: "examples",
  });

  const onSubmit: SubmitHandler<ProblemFormInputs> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("difficulty", data.difficulty);
      formData.append("questionType", data.questionType);

      if (data.keywords) {
        data.keywords.forEach((keyword, index) => {
          formData.append(`keywords[${index}]`, keyword);
        });
      }

      if (data.questionImages && data.questionImages.length > 0) {
        Array.from(data.questionImages).forEach((file, index) => {
          formData.append(`questionImages[${index}]`, file);
        });
      }

      data.examples.forEach((example, index) => {
        formData.append(`examples[${index}][input]`, example.input);
        formData.append(`examples[${index}][output]`, example.output);
        if (example.image && example.image.length > 0) {
          Array.from(example.image).forEach((file, fileIndex) => {
            formData.append(`examples[${index}][image][${fileIndex}]`, file);
          });
        }
      });

      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="w-full bg-darkish min-h-screen flex justify-center items-center p-4">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-300 text-center">
          Upload a New Problem
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Problem Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              id="title"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300"
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
              className="block text-sm font-medium text-gray-300"
            >
              Problem Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              id="description"
              className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300"
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
              className="block text-sm font-medium text-gray-300"
            >
              Problem Difficulty
            </label>
            <select
              {...register("difficulty", {
                required: "Difficulty is required",
              })}
              id="difficulty"
              className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300"
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
              htmlFor="questionType"
              className="block text-sm font-medium text-gray-300"
            >
              Question Type
            </label>
            <select
              {...register("questionType", {
                required: "Question Type is required",
              })}
              id="questionType"
              className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300"
            >
              <option value="">Select type</option>
              <option value="DSA">DSA</option>
              <option value="Embedded">Embedded</option>
            </select>
            {errors.questionType && (
              <span className="text-red-500 text-sm">
                {errors.questionType.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-300"
            >
              Keywords
            </label>
            <div className="flex space-x-2 overflow-x-auto py-2">
              {keywordFields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-2">
                  <input
                    {...register(`keywords.${index}`, { required: false })}
                    id={`keywords.${index}`}
                    type="text"
                    className="px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => removeKeyword(index)}
                    className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => appendKeyword({ input: "", output: "" })}
              className="mt-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Add Keyword
            </button>
          </div>

          <div>
            <label
              htmlFor="questionImages"
              className="block text-sm font-medium text-gray-300"
            >
              Question Images
            </label>
            <input
              {...register("questionImages")}
              id="questionImages"
              type="file"
              multiple
              className="mt-1 block w-full text-gray-300"
            />
          </div>

          <div className="border-2 border-gray-600 rounded-lg p-4">
            <label className="block text-base font-medium text-gray-300">
              Examples
            </label>
            <div className="max-h-80 overflow-y-auto space-y-4 p-2 border rounded-md border-gray-600">
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-2">
                  <div>
                    <label
                      htmlFor={`examples[${index}].input`}
                      className="block text-sm font-medium text-gray-300"
                    >
                      Example Input
                    </label>
                    <textarea
                      {...register(`examples.${index}.input`, {
                        required: "Input is required",
                      })}
                      id={`examples[${index}].input`}
                      className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300"
                    />
                    {errors.examples?.[index]?.input && (
                      <span className="text-red-500 text-sm">
                        {errors?.examples[index]?.input?.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`examples[${index}].output`}
                      className="block text-sm font-medium text-gray-300"
                    >
                      Example Output
                    </label>
                    <textarea
                      {...register(`examples.${index}.output`, {
                        required: "Output is required",
                      })}
                      id={`examples[${index}].output`}
                      className="mt-1 block w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-300"
                    />
                    {errors.examples?.[index]?.output && (
                      <span className="text-red-500 text-sm">
                        {errors?.examples[index]?.output?.message}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="">
                      <label
                        htmlFor={`examples[${index}].image`}
                        className="block text-sm font-medium text-gray-300"
                      >
                        Example Image
                      </label>
                      <input
                        {...register(`examples.${index}.image`)}
                        id={`examples[${index}].image`}
                        type="file"
                        className="mt-1 block w-full text-gray-300"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-white bg-red-600 hover:bg-red-700 px-4 h-fit py-2 rounded-md"
                    >
                      Remove Example
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                append({ input: "", output: "", image: undefined })
              }
              className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Add Example
            </button>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProblemUpload;
