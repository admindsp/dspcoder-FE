import React from "react";
import TopicSection from "./_components/TopicSection/TopicSection";
import QNASection from "./_components/QNASection/QNASection";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="min-h-screen mx-auto p-4">
      <div className="flex gap-4 justify-between">
        <TopicSection />
        <QNASection />
      </div>
    </div>
  );
};

export default Homepage;
