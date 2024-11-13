"use client";

import { EditBasicInfoForm } from "@/components/forms/EditBasicInfoForm";
import { EditExperienceForm } from "@/components/forms/EditExperienceForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useFormContext } from "@/context/formContext";

export default function PreviewPage() {
  const { firstName, title } = useFormContext();

  return (
    <section className="flex flex-row justify-center items-center gap-4 w-full mx-auto h-screen">
      <div className="flex flex-col gap-5">
        <Card className="bg-transparent border-none text-white shadow-none w-96">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="uppercase font-medium tracking-wide text-lg text-[#FF7733]">
              Basic Info
            </CardTitle>
            <Dialog>
              <DialogTrigger
                asChild
                className="bg-[#FF7733] w-14"
              >
                <span className="cursor-pointer p-2 rounded-lg transition duration-300 ease-out hover:bg-gray-100">
                  Edit
                </span>
              </DialogTrigger>
              <EditBasicInfoForm />
            </Dialog>
          </CardHeader>
          <CardContent>
            <p>
              First name: <span>{firstName}</span>
            </p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border-none text-white shadow-none w-96">
          <Dialog>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="uppercase font-medium tracking-wide text-lg text-[#FF7733]">
                Experience
              </CardTitle>
              <Dialog>
                <DialogTrigger
                  asChild
                  className="bg-[#FF7733] w-14"
                >
                  <span className="cursor-pointer p-2 rounded-lg transition duration-300 ease-out hover:bg-gray-100">
                    Edit
                  </span>
                </DialogTrigger>
                <EditExperienceForm />
              </Dialog>
            </CardHeader>
            <CardContent>
              <p>
                Title: <span>{title}</span>
              </p>
            </CardContent>
          </Dialog>
        </Card>
      </div>
    </section>
  );
}
