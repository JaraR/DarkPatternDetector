"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
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
      message: "Tweet must be at least 10 characters.",
    })
    .max(840, {
      message: "Tweet must not be longer than 840 characters.",
    }),
})

export function TextareaForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })
  // States to hold API response and loading status
  const [apiResponse, setApiResponse] = useState("")
  const [loading, setLoading] = useState(false)

  // Handles form submission
  async function onSubmit(data) {
    console.log(data)
    console.log(data.tweet)
    
    setLoading(true) // Set loading state
    try {
      const response = await OpenAIapi(data.tweet) // Wait for API response
      setApiResponse(response) // Update state with API response
    } catch (error) { // Error handling
      console.error("Error calling OpenAI API:", error)
      setApiResponse("Error processing the request. Please try again.")
    } finally {
      setLoading(false) // Reset loading state
    }
  }

  // Form controls and visible form info
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="tweet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emotional Steering</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter tweet here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter a tweet in the box above and click the submit button to analyze a tweet for emotional steering.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
        {/* Display API response */}
        {apiResponse && (
          <div className="mt-4 p-4 border rounded bg-gray-50">
            <h3 className="font-bold">Response:</h3>
            <p>{apiResponse}</p>
          </div>
        )}
      </form>
    </Form>
  )
}
