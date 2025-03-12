import openai

API_KEY = ""
openai.api_key = API_KEY

# API call to OpenAI, only needs an API key to get going
# nealy identical to EML_openai.ipynb, just a few changes to make it run and only outputs response content + small extras
response = openai.chat.completions.create(
 model="gpt-3.5-turbo",
 messages=[
     {"role": "user", "content": "Analyze the sentiment of this text and identify if it contains any information that should be verified. Indicate if it invokes specific emotions in readers and whether it may be emotionally manipulative.' Exactly. The reason that the public no longer trusts the legacy media is that the media has been exposed as lying too many times to count. Legacy media absolutely deserves the lack of respect and ridicule it gets.Just yesterday, the legacy media tried to claim that @realDonaldTrump wanted to kill Liz Cheney when what he actually said was that she would feel differently about being a warmonger if she had to fight herself, instead of sending others to die. Shameful. ' ", }
  ]
)

print(response.choices[0].message)
