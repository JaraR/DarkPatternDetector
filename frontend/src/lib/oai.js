import OpenAI from "openai";
//uncomment and paste the key to use
//const API_KEY = process.env.API_KEY

const openai = new OpenAI({
  apiKey: "",
});

const runPrompt = async () => {
  try {
    const newPrompt = "What is the difference between a stalactite and a stalagmite?";

    // Use the Chat API to create a completion using GPT-3.5-Turbo
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: newPrompt },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    // Accessing the response from GPT-3.5
    console.log(response.choices[0].message.content.trim());
  } catch (error) {
    console.error('Error communicating with OpenAI:', error.message);
  }
};

runPrompt();
