import { OpenAI } from "openai";

// API KEY NOT ENCRYPTED; DO NOT PUSH WITH API KEY IN FILE
// dangerouslyAllowBrowser allows API usage in browser. TAKE CARE WHERE KEY IS USED - uncomment to allow use
const API_KEY = ""
const openai = new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true
});

export async function OpenAIapi(userInput) {
const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            "role": "user",
            "content": `Analyze the sentiment of this text and identify if it contains any information that should be verified. Indicate if it invokes specific emotions in readers and whether it may be emotionally manipulative. Your task is to give an output with these headings: Sentiment:, Summary:, Emotions:, Verification_Needed:, Manipulative:, as if you were generating a short summary of a product \ review of an application that is available on playstore. In at most 100 words. '${userInput}'`
        }
    ],
});

return(completion.choices[0].message.content)
}