import Groq from "groq-sdk";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from './config/database.js';
import Chat from './models/Chat.js';

const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/", async (req, res) => {
    const { chats } = req.body;
    const result = await groq.chat.completions.create({
        model: "mixtral-8x7b-32768",
        messages: [
            {
                role: "system",
                content: "Soy MatiasGPT. Estoy aqui para ayudarte.",
            },
            ...chats,
        ],
    });
    res.json({
        output: result.choices[0].message,
    });
});

app.post("/saveChats", async (req, res) => {
  let { chats } = req.body;
  console.log("chats", chats);
  
  try {
    const newChat = await Chat.create({ chats });
    res.json({ message: "Chats saved successfully", chat: newChat });
  } catch (error) {
    console.error("Error saving chats:", error);
    res.status(500).json({ message: "Error saving chats" });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});