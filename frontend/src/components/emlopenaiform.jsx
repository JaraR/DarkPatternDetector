"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
  tweet: z
    .string()
    .min(10, {
      message: "Text must be at least 10 characters.",
    })
    .max(840, {
      message: "Tweet must not be longer than 840 characters.",
    }),
})

export function TextareaForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="tweet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emotional Steering</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter text here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Use the box above to analyze a tweet for emotional steering.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
