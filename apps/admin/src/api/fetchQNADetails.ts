import { Topic } from "@/types/topicTypes";

export const fetchQNADetails = async (): Promise<Topic[]> => {
  try {
    const response = await fetch("http://localhost:8004/api/topics");
    const data = await response.json();
    if (data.success) {
      return data.data;
    } else {
      throw new Error("Failed to fetch topics");
    }
  } catch (error) {
    console.error("Error fetching topics:", error);
    throw error;
  }
};

export default fetchQNADetails;
