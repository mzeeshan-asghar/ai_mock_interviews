import { Button } from "@/components/ui/button";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="space-y-6">
      <div className="flex justify-between gap-4 ">
        <div className="flex items-center gap-4">
          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={40}
            height={40}
            className="rounded-full object-cover size-[40px]"
          />
          <h3 className="capitalize">Frontend Developer Interview</h3>
          {/* <DisplayTechIcons techStack={interview.techstack} /> */}
        </div>

        <p className="bg-muted px-4 py-2 rounded-lg h-fit">
          Technical Interview
        </p>
      </div>
      <div className="call-view">
        <div className="interviewer-card">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            {/* <span className="animate-speak" /> */}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="user-card">
          <Image
            src="/user-avatar.png"
            alt="profile-image"
            width={539}
            height={539}
            className="rounded-full object-cover size-[120px]"
          />
          <h3>User</h3>
        </div>
      </div>
      <div className="transcript">
        <p>What job experience level are you targeting?</p>
      </div>
      <div className="flex-center gap-4">
        <Button size="lg">Repeat</Button>
        <Button size="lg" variant="destructive">
          Leave interview
        </Button>
      </div>
    </section>
  );
}

export default page;
