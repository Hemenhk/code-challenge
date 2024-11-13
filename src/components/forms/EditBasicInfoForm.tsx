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
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name cannot be empty.",
  }),
});

export function EditBasicInfoForm() {
  const { firstName, setFirstName } = useFormContext();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: firstName || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setFirstName(values.firstName);
  };
  console.log("firstName", firstName);

  return (
    <Form {...form}>
      <DialogContent className="size-[400px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-medium text-[#FF7733] uppercase">
            Basic Info
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">
                  First Name <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl></FormControl>
                <Input className="text-black" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-[#FF7733]">
            Save
          </Button>
        </form>
      </DialogContent>
    </Form>
  );
}
