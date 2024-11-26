import { OpenAI } from "openai";

// API KEY NOT ENCRYPTED; DO NOT PUSH WITH API KEY IN FILE
// dangerouslyAllowBrowser allows API usage in browser. TAKE CARE WHERE KEY IS USED - uncomment to allow use
const API_KEY = ""
const openai = new OpenAI({
    apiKey: API_KEY,
    // dangerouslyAllowBrowser: true
});

export async function OpenAIapi(userInput) {
const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            "role": "user",
            "content": `Test input/query: '${userInput}'`
        }
    ],
});

return(completion.choices[0].message.content)
}