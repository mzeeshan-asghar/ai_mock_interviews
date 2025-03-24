import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
        <p>Practice real interview questions & get instant feedback.</p>
        <Button href="/interview">Start an Interview</Button>
      </div>
      <Image
        src="/robot.png"
        alt="Mock Interview"
        width={440}
        height={320}
        priority
      />
    </section>
  );
}

export default HeroSection;
