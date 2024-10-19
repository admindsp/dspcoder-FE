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
];

export const ProblemsData = [
  {
    id: 1,
    type: ["dsa"],
    title: "Longest Increasing Subsequence",
    difficulty: "medium",
    topic: ["dynamic programming", "array"],
    companies: ["Google", "Amazon"],
    folder_path: "/problems/longest_increasing_subsequence",
  },
  {
    id: 2,
    type: ["embedded"],
    title: "Embedded System Basics",
    difficulty: "easy",
    topic: ["microcontroller", "interrupts"],
    companies: ["Intel", "Texas Instruments"],
    folder_path: "/problems/embedded_system_basics",
  },
  {
    id: 3,
    type: ["dsa", "embedded"],
    title: "Memory Management in Embedded Systems",
    difficulty: "hard",
    topic: ["memory management", "hardware"],
    companies: ["ARM", "Apple"],
    folder_path: "/problems/memory_management",
  },
  {
    id: 4,
    type: ["dsa"],
    title: "Validate Binary Search Tree",
    difficulty: "easy",
    topic: ["trees", "binary search tree"],
    companies: ["Google", "Amazon"],
    folder_path: "/problems/validate_binary_search_tree",
  },
  {
    id: 5,
    type: ["embedded"],
    title: "Real-time Operating Systems",
    difficulty: "medium",
    topic: ["RTOS", "task scheduling"],
    companies: ["Qualcomm", "Samsung"],
    folder_path: "/problems/real_time_os",
  },
  {
    id: 6,
    type: ["dsa"],
    title: "Merge Two Sorted Lists",
    difficulty: "easy",
    topic: ["linked list", "two pointers"],
    companies: ["Amazon", "Google"],
    folder_path: "/problems/merge_two_sorted_lists",
  },
  {
    id: 7,
    type: ["embedded"],
    title: "UART Communication",
    difficulty: "medium",
    topic: ["communication protocols", "UART"],
    companies: ["NXP", "Microchip"],
    folder_path: "/problems/uart_communication",
  },
  {
    id: 8,
    type: ["dsa", "embedded"],
    title: "Interrupt Handling in Embedded Systems",
    difficulty: "hard",
    topic: ["interrupts", "hardware"],
    companies: ["STMicroelectronics", "Intel"],
    folder_path: "/problems/interrupt_handling",
  },
  {
    id: 9,
    type: ["dsa"],
    title: "Dijkstra's Shortest Path",
    difficulty: "medium",
    topic: ["graph", "shortest path"],
    companies: ["Amazon", "Netflix"],
    folder_path: "/problems/dijkstra_shortest_path",
  },
  {
    id: 10,
    type: ["embedded"],
    title: "SPI Communication Protocol",
    difficulty: "medium",
    topic: ["SPI", "communication protocols"],
    companies: ["Broadcom", "NVIDIA"],
    folder_path: "/problems/spi_communication",
  },
];
