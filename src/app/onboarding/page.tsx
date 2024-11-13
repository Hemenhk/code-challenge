"use client";

import { Badge } from "@/components/ui/badge";
import { BasicInfoForm } from "@/components/forms/BasicInfoForm";
import { ExperienceForm } from "@/components/forms/ExperienceForm";
import { useFormContext } from "@/context/formContext";

export default function OnboardingPage() {
  const { step } = useFormContext();

  return (
    <section className="flex flex-col w-2/4 justify-center space-y-10 mx-auto h-screen">
      <div className="flex flex-row justify-center items-center gap-3">
        <span className="flex flex-row gap-2 text-white">
          <Badge className="bg-[#FF7733] rounded-full size-8 flex items-center justify-center">
            1
          </Badge>{" "}
          Basic info
        </span>
        <span className="flex flex-row gap-2 text-white">
          <Badge
            className={`rounded-full size-8 flex items-center justify-center ${
              step === 2 ? "bg-[#FF7733] text-white" : "bg-white text-black"
            }`}
          >
            2
          </Badge>{" "}
          Experience
        </span>
      </div>
      <div>{step === 1 ? <BasicInfoForm /> : <ExperienceForm />}</div>
    </section>
  );
}
