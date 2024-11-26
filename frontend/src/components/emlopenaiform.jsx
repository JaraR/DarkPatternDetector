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
// import EmlResult from "@/components/ui/EmlResult";

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
const positiveEmotions = [
  "Happiness",
  "Joy",
  "Excitement",
  "Gratitude",
  "Contentment",
  "Love",
  "Appreciation",
  "Pride",
  "Amusement",
  "Hope",
  "Relief",
  "Optimism",
  "Admiration",
  "Inspiration",
  "Affection",
  "Confidence",
  "Elation",
  "Cheerfulness",
  "Delight",
  "Bliss",
  "Satisfaction",
  "Kindness",
  "Trust",
  "Empathy",
  "Fulfillment",
];
export function TextareaForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });
  // States to hold API response and loading status
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentiment, setSentiment] = useState("");
  const [emotions, setEmotions] = useState("");
  const [verification, setVerification] = useState("");
  const [summary, setSummary] = useState("");
  const [manipulative, setManipulative] = useState("");
  const isPositiveEmotion = positiveEmotions.some((emotion) =>
    emotions.includes(emotion)
  );

  // Handles form submission
  async function onSubmit(data) {
    setLoading(true); // Set loading state
    try {
      const response = await OpenAIapi(data.tweet); // Wait for API response
      setApiResponse(response); // Update state with API response

      const sentimentMatch = response.match(
        /Sentiment:\s*(Positive|Negative|Neutral)/i
      );
      if (sentimentMatch) {
        setSentiment(sentimentMatch[1]); // Update sentiment state
      } else {
        setSentiment("Unknown"); // Fallback if sentiment is not detected
      }
      const summaryMatch = response.match(/Summary:\s*(.*?)\s*Emotions:/i);
      if (summaryMatch) {
        setSummary(summaryMatch[1].trim()); // Update summary state with the captured text
      } else {
        setSummary("Unknown"); // Fallback if summary is not detected
      }
      const emotionsMatch = response.match(/Emotions:\s*(.*?)\s*Verification/i);
      if (emotionsMatch) {
        setEmotions(emotionsMatch[1].trim()); // Update emotions state with the captured text
      } else {
        setEmotions("Unknown"); // Fallback if emotions are not detected
      }
      const verificationMatch = response.match(
        /Needed:\s*(.*?)\s*Manipulative:/i
      );
      if (verificationMatch) {
        setVerification(verificationMatch[1].trim()); // Update emotions state with the captured text
      } else {
        setVerification("Unknown"); // Fallback if emotions are not detected
      }
      const manipulativeMatch = response.match(/Manipulative:\s*(.*)$/i);
      if (manipulativeMatch) {
        setManipulative(manipulativeMatch[1].trim()); // Update emotions state with the captured text
      } else {
        setManipulative("Unknown"); // Fallback if emotions are not detected
      }
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setApiResponse("Error processing the request. Please try again.");
      setSentiment("Unknown");
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
                <FormLabel className="font-bold text-center">
                  Emotional Steering
                </FormLabel>
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

          {apiResponse && (
            <div className="p-4  m-4 border rounded bg-gray-50">
              <h3 className="font-bold text-lg text-center">Analysis Report</h3>

              {/* <p className="mt-2">{apiResponse}</p> */}
              <div className="mt-4">
                <span className="font-bold">Sentiment:</span>
                <span
                  className={`px-4 py-2 font-bold text-black rounded-full ${
                    sentiment === "Positive"
                      ? "bg-green-500"
                      : sentiment === "Negative"
                      ? "bg-red-500"
                      : sentiment === "Neutral"
                      ? "bg-gray-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {sentiment}
                </span>
              </div>
              <div className="mt-4">
                <span className="font-bold">Manipulative:</span>
                <span
                  className={`px-4 py-2 font-bold text-black rounded-full ${
                    manipulative.toLowerCase().includes("not") &&
                    manipulative.toLowerCase().includes("manipulative")
                      ? "bg-green-500" // Green for "Not manipulative"
                      : "bg-red-500" // Red for "Manipulative"
                  }`}
                >
                  {manipulative.toLowerCase().includes("not") &&
                  manipulative.toLowerCase().includes("manipulative")
                    ? "Not manipulative"
                    : "Manipulative"}
                </span>

                {/* <div className="pt-2">{manipulative}</div> */}
              </div>
              {/* <div className="mt-4">
                <span className="font-bold">Emotions:</span>
                <span>{emotions}</span>
              </div> */}

              <div className="mt-4">
                <span className="font-bold">Emotions:</span>
                <span
                // className={`${
                //   isPositiveEmotion
                //     ? "bg-orange-500 rounded-full p-2"
                //     : "bg-red-500 rounded-full p-2"
                // }`}
                >
                  {emotions}
                </span>
              </div>
              <div className="mt-4">
                <span className="font-bold">Verification Needed:</span>
                <span>{verification}</span>
              </div>
              <div className="mt-4">
                <span className="font-bold text-center">Summary:</span>
                <span>{summary}</span>
              </div>
            </div>
          )}
        </form>
      </Form>
    </>
  );
}
