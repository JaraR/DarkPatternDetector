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
import { OpenAIapi } from "@/lib/obstructionOpenAIapi.mjs";

import noInstructions from "/public/icons/no-report-obstruction.png";
import emlIcon from "/public/icons/obstruction.png";

const FormSchema = z.object({
  question: z
    .string()
    .min(10, {
      message: "Question must be at least 10 characters.",
    })
    .max(840, {
      message: "Question must not be longer than 840 characters.",
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
  setLoading(true) // Set loading state
  try {
    const response = await OpenAIapi(data.question) // Wait for API response
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
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="mr-3 ml-3  justify-center">
                <FormLabel className="flex font-bold text-center text-xl">
                  <img
                    src={emlIcon}
                    alt="Obstruction Icon"
                    className="w-6 h-6 mx-3"
                  />
                  Obstruction
                </FormLabel>

                <FormControl>
                  <Textarea
                    placeholder='Enter a question related to tasks that are either difficult to complete or hidden on X/Twitter, e.g.: "How do I cancel my X API subscription?" and click Submit to generate instructions'
                    className=" placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>Enter a query regarding obstruction in the box above and click the submit button.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col-3 justify-end mt-0 mr-3 p-0">
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#A1A1A8] text-white font-bold rounded-full px-1.5 py-0.5 text-sm hover:bg-[#7f7f85]"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>

          {apiResponse ? (
            <div className="p-4  m-4 border rounded bg-gray-50">
              <h3 className="font-bold text-lg text-center">Instructions</h3>
              <p>{apiResponse}</p>
            </div>
          ) : (
            <div className="p-4 m-4 gap-2 border rounded bg-gray-50 h-[250px] flex flex-col items-center justify-center  ">
              <img src={noInstructions} alt="No Instructions" className="mb-2 w-20" />
              <div className="text-center font-bold mt-0 text-2xl text-gray-600">
                No instructions generated
              </div>

            </div>
          )}
        </form>
      </Form>
    </>
  );
}