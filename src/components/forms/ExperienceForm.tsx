"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "@/context/formContext";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title cannot be empty.",
  }),
});

export function ExperienceForm() {
  const router = useRouter();
  const { title, setTitle } = useFormContext();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setTitle(values.title);
    setTimeout(() => {
      router.push("/preview");
    }, 1000);
  };
  console.log("title", title);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="text-3xl text-white uppercase">Experience</h2>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                Title <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input className="text-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-[#FF7733]">
          Preview
        </Button>
      </form>
    </Form>
  );
}
