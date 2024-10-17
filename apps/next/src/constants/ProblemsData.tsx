export const ProblemsData = [
  {
    id: 1105,
    title: "Filling Bookcase Shelves",
    acceptanceRate: "68.6%",
    difficulty: "Medium",
    totalSubmissions: 12000,
    acceptedSubmissions: 8200,
    solution: true,
  },
  {
    id: 1,
    title: "Two Sum",
    acceptanceRate: "53.3%",
    difficulty: "Easy",
    totalSubmissions: 200000,
    acceptedSubmissions: 106600,
    solution: true,
  },
  {
    id: 2,
    title: "Add Two Numbers",
    acceptanceRate: "43.6%",
    difficulty: "Medium",
    totalSubmissions: 150000,
    acceptedSubmissions: 65400,
    solution: true,
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    acceptanceRate: "35.2%",
    difficulty: "Medium",
    totalSubmissions: 180000,
    acceptedSubmissions: 63360,
    solution: true,
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    acceptanceRate: "40.9%",
    difficulty: "Hard",
    totalSubmissions: 130000,
    acceptedSubmissions: 53170,
    solution: true,
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    acceptanceRate: "34.2%",
    difficulty: "Medium",
    totalSubmissions: 160000,
    acceptedSubmissions: 54720,
    solution: true,
  },
  {
    id: 6,
    title: "Zigzag Conversion",
    acceptanceRate: "48.8%",
    difficulty: "Medium",
    totalSubmissions: 140000,
    acceptedSubmissions: 68320,
    solution: true,
  },
  {
    id: 7,
    title: "Reverse Integer",
    acceptanceRate: "28.9%",
    difficulty: "Medium",
    totalSubmissions: 210000,
    acceptedSubmissions: 60690,
    solution: true,
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    acceptanceRate: "17.7%",
    difficulty: "Medium",
    totalSubmissions: 230000,
    acceptedSubmissions: 40710,
    solution: false,
  },
  {
    id: 9,
    title: "Palindrome Number",
    acceptanceRate: "57.1%",
    difficulty: "Easy",
    totalSubmissions: 220000,
    acceptedSubmissions: 125620,
    solution: true,
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    acceptanceRate: "28.3%",
    difficulty: "Hard",
    totalSubmissions: 240000,
    acceptedSubmissions: 67920,
    solution: false,
  },
  {
    id: 11,
    title: "Container With Most Water",
    acceptanceRate: "55.8%",
    difficulty: "Medium",
    totalSubmissions: 110000,
    acceptedSubmissions: 61380,
    solution: true,
  },
  {
    id: 12,
    title: "Integer to Roman",
    acceptanceRate: "65.7%",
    difficulty: "Medium",
    totalSubmissions: 100000,
    acceptedSubmissions: 65700,
    solution: true,
  },
];

export const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export const statusOptions = [
  { value: "to-do", label: "To-do" },
  { value: "attempted", label: "Attempted" },
  { value: "solved", label: "Solved" },
];

export const listsOptions = [
  { value: "Top 100", label: "Top 100" },
  { value: "Top 200", label: "Top 200" },
  { value: "Top 50", label: "Top 50" },
];

export const tagsOptions = [
  { value: "array", label: "Array" },
  { value: "string", label: "String" },
  { value: "linked-list", label: "Linked List" },
  // { value: "math", label: "Math" },
  // { value: "tree", label: "Tree" },
  // { value: "depth-first-search", label: "Depth First Search" },
  // { value: "binary-search", label: "Binary Search" },
  // { value: "hash-table", label: "Hash Table" },
  // { value: "two-pointers", label: "Two Pointers" },
  // { value: "greedy", label: "Greedy" },
  // { value: "sort", label: "Sort" },
]

export const Question_id_1111 = {
  "id": 1,
  "type": ["coding"],
  "title": "Two Sum",
  "difficulty": "Easy",
  "topic": ["Array", "Hash Table"],
  "companies": ["Amazon", "Facebook", "Google"],
  "files": "S3/Questions/id_1111", // base, run, util : folders
  "memory_footprint": "Low",
  "total_accepted_solutions": 500,
  "total_submissions": 1000,
  "acceptance_rate": 0.5,
  "total_clock_cycles": 1000000,
  "ground_truth_ans": "This ans will be used as grnd truth for subjective ques",
  "hints": [
    {
      "hint_number": 1,
      "hint_text": "Start by sorting the array."
    },
    {
      "hint_number": 2,
      "hint_text": "Use a two-pointer approach."
    },
    {
      "hint_number": 3,
      "hint_text": "Consider using a hash map."
    }
  ],
  "discussion": [
    {
      "user": "ninad98",
      "message": "This question seems interesting!",
      "timestamp": "2024-06-03T12:00:00Z"
    },
    {
      "user": "username_1234",
      "message": "This question seems interesting!",
      "timestamp": "2024-06-03T12:00:00Z"
    }
  ],
  "problem_description": [
    {
      "id": 1,
      "content": "<!DOCTYPE html><html><head><title>Sample HTML</title></head><body><h1>Hello, world!</h1><p>This is a sample HTML document.</p></body></html>",
      "format": "html"
    },
    {
      "id": 2,
      "content": "function twoSum(nums, target) {\n // Your code here\n}",
      "format": "code"
    },
    {
      "id": 3,
      "content": "s3 location of audio file",
      "format": "audio"
    },
    {
      "id": 4,
      "content": "s3 location of images",
      "format": "image"
    },
    {
      "id": 5,
      "content": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
      "format": "text"
    }
  ]
}