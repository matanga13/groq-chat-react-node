import Groq from "groq-sdk";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { supabase } from "./config/supabase.js";
// import sequelize from './config/database.js';
// import Chat from './models/Chat.js';

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

// Endpoint para guardar chats
app.post("/saveChats", async (req, res) => {
  const chats = req.body;

  const { data, error } = await supabase
    .from('Chats')
    .insert([{ chats: chats }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
});

// Endpoint para obtener todos los chats
app.get("/getChats", async (req, res) => {
    const { data, error } = await supabase
      .from('Chats')
      .select('*');
  
    if (error) {
      return res.status(500).json({ error: error.message });
    }
  
    res.status(200).json({ data });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});