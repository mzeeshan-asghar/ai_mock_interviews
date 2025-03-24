import React from "react";
import InterviewCard from "./InterviewCard";

interface ShowcaseSectionProps {
  title: string;
}

function ShowcaseSection({ title }: ShowcaseSectionProps) {
  return (
    <section className="interview-section">
      <h3>{title}</h3>
      <ul>
        <li>
          <InterviewCard />
        </li>
      </ul>
    </section>
  );
}

export default ShowcaseSection;
