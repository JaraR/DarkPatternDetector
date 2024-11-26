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
            "content": `Obstruction is a type of deceptive pattern that deliberately creates obstacles or roadblocks in the user's path, making it more difficult for them to complete a desired task or take a certain action. It is used to exhaust users and make them give up, when their goals are contrary to the business's revenue or growth objectives. It is also sometimes used to soften up users in preparation for a bigger deception. When users are frustrated or fatigued, they become more susceptible to manipulation. You are to work as a guide helping help users out of any instance of obstruction they encounter in X(Formerly known as Twitter). Keep in mind these instances only occur in X(Formerly known as Twitter), with examples being: making it difficult to cancel subscriptions or delete accounts, and implementing a new ad format that can't be blocked or reported.'${userInput}'`
        }
    ],
});

return(completion.choices[0].message.content)
}
