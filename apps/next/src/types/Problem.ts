import {z} from "zod";


export const ProblemSchema = z.object({
    id: z.number(),
    type: z.array(z.string()),
    title: z.string(),
    difficulty: z.string(),
    topic: z.array(z.string()),
    companies: z.array(z.string()),
    folder_path: z.string()
})

export type ProblemType = z.infer<typeof ProblemSchema>;

// export const ProblemSchema = z.object({
//     id: z.number(),
//     type: z.array(z.string()),
//     title: z.string(),
//     difficulty: z.string(),
//     topic: z.array(z.string()),
//     companies: z.array(z.string()),
//     files: z.string(),
//     memory_footprint: z.string(),
//     total_accepted_solutions: z.number(),
//     total_submissions: z.number(),
//     acceptance_rate: z.number(),
//     total_clock_cycles: z.number(),
//     ground_truth_ans: z.string(),
//     key:z.string(),
//     hints: z.array(z.object({
//         hint_number: z.number(),
//         hint_text: z.string()
//     })),
//     discussion: z.array(z.object({
//         user: z.string(),
//         message: z.string(),
//         timestamp: z.string()
//     })),
//     problem_description: z.array(z.object({
//         id: z.number(),
//         content: z.string(),
//         format: z.string()
//     }))
// });
    // export const Question_id_1111 = {
    //     "id": 1,
    //     "type": ["coding"],
    //     "title": "Two Sum",
    //     "difficulty": "Easy",
    //     "topic": ["Array", "Hash Table"],
    //     "companies": ["Amazon", "Facebook", "Google"],
    //     "files": "S3/Questions/id_1111", // base, run, util : folders
    //     "memory_footprint": "Low",
    //     "total_accepted_solutions": 500,
    //     "total_submissions": 1000,
    //     "acceptance_rate": 0.5,
    //     "total_clock_cycles": 1000000,
    //     "ground_truth_ans": "This ans will be used as grnd truth for subjective ques",
    //     "hints": [
    //       {
    //         "hint_number": 1,
    //         "hint_text": "Start by sorting the array."
    //       },
    //       {
    //         "hint_number": 2,
    //         "hint_text": "Use a two-pointer approach."
    //       },
    //       {
    //         "hint_number": 3,
    //         "hint_text": "Consider using a hash map."
    //       }
    //     ],
    //     "discussion": [
    //       {
    //         "user": "ninad98",
    //         "message": "This question seems interesting!",
    //         "timestamp": "2024-06-03T12:00:00Z"
    //       },
    //       {
    //         "user": "username_1234",
    //         "message": "This question seems interesting!",
    //         "timestamp": "2024-06-03T12:00:00Z"
    //       }
    //     ],
    //     "problem_description": [
    //       {
    //         "id": 1,
    //         "content": "<!DOCTYPE html><html><head><title>Sample HTML</title></head><body><h1>Hello, world!</h1><p>This is a sample HTML document.</p></body></html>",
    //         "format": "html"
    //       },
    //       {
    //         "id": 2,
    //         "content": "function twoSum(nums, target) {\n // Your code here\n}",
    //         "format": "code"
    //       },
    //       {
    //         "id": 3,
    //         "content": "s3 location of audio file",
    //         "format": "audio"
    //       },
    //       {
    //         "id": 4,
    //         "content": "s3 location of images",
    //         "format": "image"
    //       },
    //       {
    //         "id": 5,
    //         "content": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    //         "format": "text"
    //       }
    //     ]
    //   }