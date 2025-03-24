import HeroSection from "@/components/HeroSection";
import InterviewSection from "@/components/InterviewSection";
import React from "react";

function Home() {
  return (
    <>
      <HeroSection />
      <InterviewSection title="Your Past Interviews" />
      <InterviewSection title="Pick Your Interview" />
    </>
  );
}

export default Home;
