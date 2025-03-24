import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getRandomInterviewCover } from "@/lib/utils";

function InterviewCard() {
  return (
    <div className="interview-card">
      <Image
        src="/covers/amazon.png"
        alt="Amazon Cover"
        width={90}
        height={90}
      />
      <h3>Frontend Dev Interview</h3>
      <div>
        <span>
          <Calendar /> Feb 28, 2025
        </span>
        <span>
          <Star /> 12/100
        </span>
      </div>
      <p>
        This interview does not reflect serious interest or engagement from the
        candidate. Their responses are dismissive, vague, or outright negative,
        making it more
      </p>
      <Badge className="badge">Technical</Badge>
      <div>
        <Image
          src={getRandomInterviewCover()}
          alt="cover-image"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <Button>View interview</Button>
      </div>
    </div>
  );
}

export default InterviewCard;
