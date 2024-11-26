"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { OpenAIapi } from "@/lib/openAIapi.mjs";

const FormSchema = z.object({
  tweet: z
    .string()
    .min(10, {
      message: "Tweet must be at least 10 characters.",
    })
    .max(840, {
      message: "Tweet must not be longer than 840 characters.",
    }),
});

export function TextareaForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });
  // States to hold API response and loading status
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // Handles form submission
  async function onSubmit(data) {
    setLoading(true); // Set loading state
    try {
      const response = await OpenAIapi(data.tweet); // Wait for API response
      setApiResponse(response); // Update state with API response
    } catch (error) {
      // Error handling
      console.error("Error calling OpenAI API:", error);
      setApiResponse("Error processing the request. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  }

  // Form controls and visible form info
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
          <FormField
            control={form.control}
            name="tweet"
            render={({ field }) => (
              <FormItem className="m-5">
                <FormLabel>Emotional Steering</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Copy and paste a tweet you are interested here and click Start Analyze button to analyze
         "
                    className="resize-none placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>placeholder</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col-3 justify-end pr-5 ">
            <Button
              type="submit"
              disabled={loading}
              className="bg-pink-700 text-white font-bold rounded-full px-4 py-2 text-sm hover:bg-pink-900"
            >
              {loading ? "Analyzing..." : "Start Analyze"}
            </Button>
          </div>

          {/* Display API response */}
          {apiResponse && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <h3 className="font-bold">Report</h3>
              <p>{apiResponse}</p>
            </div>
          )}
        </form>
      </Form>
    </>
  );
}
