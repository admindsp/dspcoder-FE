"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@dspcoder/ui/components/ui/accordion";
import fetchQNADetails from "@/api/fetchQNADetails";
import { Subtopic, Topic } from "@/types/topicTypes";

type Props = {};

const TopicSection: React.FC<Props> = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        const fetchedTopics = await fetchQNADetails();
        setTopics(fetchedTopics);
        console.log(topics);
      } catch (error) {
        console.error("Error loading topics:", error);
      }
    };

    loadTopics();
  }, []);

  return (
    <div className="w-[30%] px-2">
      <Accordion type="single" collapsible>
        {topics.map((topic, topicIndex) => (
          <AccordionItem key={topic._id} value={`item-${topicIndex}`}>
            <AccordionTrigger>{topic.name}</AccordionTrigger>
            <AccordionContent>
              {topic.subtopics.map(
                (subtopic: Subtopic, subtopicIndex: number) => (
                  <div key={subtopicIndex}>
                    <h3>{subtopic.name}</h3>
                  </div>
                )
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TopicSection;
