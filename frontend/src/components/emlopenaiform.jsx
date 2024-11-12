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
import { OpenAIapi } from "@/lib/openAIapi.mjs"

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

// outputs JSON for OpenAI API in console
  function onSubmit(data) {
    console.log(data)
    console.log(data.tweet)
    console.log(JSON.stringify({
        role: "user",
        content: `Analyze the sentiment of this text and identify if it contains any information that should be verified. Indicate if it invokes specific emotions in readers and whether it may be emotionally manipulative. '${data.tweet}'`
    }))

    return(
        OpenAIapi(data.tweet)
    )
  }

// Form controls and visible form info
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
