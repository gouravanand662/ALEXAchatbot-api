import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Simple chatbot logic
function getBotReply(message) {
  message = message.toLowerCase();
  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! I’m your Saathi chatbot. How can I help you today?";
  }
  if (message.includes("help")) {
    return "I can answer basic questions or just chat with you. Try saying 'hello' or 'who are you'.";
  }
  if (message.includes("who are you")) {
    return "I’m Saathi, your assistant, always here to chat!";
  }
  return "Sorry, I didn’t understand that. Can you try rephrasing?";
}

// API endpoint Alexa will call
app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";
  const reply = getBotReply(userMessage);
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Chatbot API running on http://localhost:${PORT}`);
});
