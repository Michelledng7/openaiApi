import { config } from "dotenv";
config()
// require('dotenv')
// require('dotenv').config()

//need openai
import { OpenAI } from "openai"
import readline from "readline"


const openai = new OpenAI({
    apiKey: process.env.API_KEY
})

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt()
//set up listener
userInterface.on("line", async input => {
    const res = await openai.chat.completions.create({
        model: "gpt-4",
        message: [{ role: "user", content: input}]
    })
    console.log(res.data.choice[0].message.content)
    userInterface.prompt()
})

// openai.chat.completions.create({
    // model: "gpt-3.5-turbo",
    // message: [{role: "user", content: "Hi, Chatgpt!"}]
// }).then(res => {
    // console.log(res.data.choices[0].text)
// })  
