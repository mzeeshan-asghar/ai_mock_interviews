import HeroSection from "@/components/HeroSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import React from "react";

function Home() {
  return (
    <>
      <HeroSection />
      <ShowcaseSection title="Your Past Interviews" />
      <ShowcaseSection title="Pick Your Interview" />
    </>
  );
}

export default Home;
