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

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name cannot be empty.",
  }),
});

export function BasicInfoForm() {
  const { firstName, setFirstName, setStep } = useFormContext();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setFirstName(values.firstName);
    setStep((prevStep) => prevStep + 1);
  };
  console.log("firstName", firstName);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="text-3xl text-white uppercase">Basic Info</h2>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                First Name <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl></FormControl>
              <Input className="text-white" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-[#FF7733]">
          Next
        </Button>
      </form>
    </Form>
  );
}
