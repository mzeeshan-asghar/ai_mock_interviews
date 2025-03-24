import React from "react";
import InterviewCard from "./InterviewCard";

interface InterviewSectionProps {
  title: string;
}

function InterviewSection({ title }: InterviewSectionProps) {
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

export default InterviewSection;
