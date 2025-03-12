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

import noReport from "/public/icons/no-report-eml.png";
import emlIcon from "/public/icons/emotion.png";

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
  const [sentiment, setSentiment] = useState("");
  const [emotions, setEmotions] = useState("");
  const [verification, setVerification] = useState("");
  const [summary, setSummary] = useState("");
  const [manipulative, setManipulative] = useState("");

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="tweet"
            render={({ field }) => (
              <FormItem className="ml-3 mt-1  justify-center">
                <FormLabel className="flex font-bold text-center text-xl">
                  <img
                    src={emlIcon}
                    alt="Emotional Steering Icon"
                    className="w-6 h-6 mx-3"
                  />
                  Emotional Steering
                </FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="Copy and paste a tweet you are interested in here and click the Analyze button to generate a report"
                    className=" placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>placeholder</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col-3 justify-end mt-0 mr-3 p-0">
            <Button
              type="submit"
              disabled={loading}
              className="bg-pink-700 text-white font-bold rounded-full px-1.5 py-0.5 text-sm hover:bg-pink-900"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </Button>
          </div>

          {apiResponse ? (
            <div className="p-4  m-4 border rounded bg-gray-50">
              <h3 className="font-bold text-lg text-center">Analysis Report</h3>

              {/* <p className="mt-2">{apiResponse}</p> */}
              <div className="mt-4">
                <span className="ring-2 mr-3 inline-block w-[82px] ring-green-400 text-green-600 rounded-lg p-1 text-center font-bold">
                  Sentiment
                </span>

                <span
                  className={`font-bold text-black rounded-full ${
                    sentiment === "Positive"
                      ? "text-green-500"
                      : sentiment === "Negative"
                      ? "text-red-500"
                      : sentiment === "Neutral"
                      ? "text-gray-500"
                      : "text-yellow-500"
                  }`}
                >
                  {sentiment}
                </span>
              </div>
              <div className="mt-4">
                <span className="ring-2 inline-block w-[82px] mr-3 ring-red-400 text-red-600 rounded-lg p-1 text-center font-bold">
                  Manipulative
                </span>
                <span>{manipulative}</span>
              </div>

              <div className="mt-4">
                <span className="ring-2 mr-3 inline-block w-[82px] ring-purple-400 text-purple-600 rounded-lg p-1 text-center font-bold">
                  Emotions
                </span>
                <span>{emotions}</span>
              </div>
              <div className="mt-4">
                <span className="ring-2 mr-3 inline-block w-[82px] ring-orange-400 text-orange-600 rounded-lg p-1 text-center font-bold">
                  Fact-Based
                </span>
                <span>{verification}</span>
              </div>
              <div className="mt-4 ">
                <span className="ring-2 mr-3 inline-block w-[82px] ring-blue-400 text-blue-600 rounded-lg p-1 text-center font-bold ">
                  Summary
                </span>
                <span>{summary}</span>
              </div>
            </div>
          ) : (
            <div className="p-4 m-4 gap-2 border rounded bg-gray-50 h-[250px] flex flex-col items-center justify-center  ">
              <img src={noReport} alt="No Report" className="mb-2 w-20" />
              <div className="text-center font-bold mt-0 text-2xl text-gray-600">
                No report generated
              </div>

              <div className="flex-row gap-4 flex-wrap pt-2 flex items-center justify-center">
                {/* Tag 1 */}
                <div className="ring-2 ring-green-400 text-green-600 rounded-lg p-1 text-center font-bold  hover:ring-green-600 hover:text-green-800">
                  Sentiment
                </div>

                {/* Tag 2 */}
                <div className="ring-2 ring-purple-400 text-purple-600 rounded-lg p-1 text-center font-bold   hover:ring-purple-600 hover:text-purple-800">
                  Emotion
                </div>

                {/* Tag 3 */}
                <div className="ring-2 ring-orange-400 text-orange-600 rounded-lg p-1 text-center font-bold  hover:ring-orange-600 hover:text-orange-800">
                  Fact-Based
                </div>
                {/* Tag 4 */}
                <div className="ring-2 ring-red-400 text-red-600 rounded-lg p-1 text-center font-bold  hover:ring-red-600 hover:text-red-900">
                  Manipulative
                </div>

                {/* Tag 5 */}
                <div className="ring-2 ring-blue-400 text-blue-600 rounded-lg p-1 text-center font-bold  hover:ring-blue-600 hover:text-blue-900">
                  Summary
                </div>
              </div>
            </div>
          )}
        </form>
      </Form>
    </>
  );
}
