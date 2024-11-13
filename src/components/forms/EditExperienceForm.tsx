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
  title: z.string().min(2, {
    message: "Title cannot be empty.",
  }),
});

export function EditExperienceForm() {
  const { title, setTitle } = useFormContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setTitle(values.title);
  };
  console.log("title", title);

  return (
    <Form {...form}>
        <DialogContent className="size-[400px]">
          <DialogHeader>
            <DialogTitle className="text-3xl font-medium text-[#FF7733] uppercase">
              Experience
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">
                    Title <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
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
