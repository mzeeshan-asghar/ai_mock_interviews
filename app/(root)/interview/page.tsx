import React from "react";
import InterviewSection from "@/components/InterviewSection";
import { getCurrentUser } from "@/lib/actions/auth";

async function page() {
  const currentUser = await getCurrentUser();

  return (
    <InterviewSection
      title="Interview Generation"
      username={currentUser?.name}
      userId={currentUser?.id}
      type="generate"
    />
  );
}

export default page;
