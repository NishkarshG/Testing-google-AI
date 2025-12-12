import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini API client
// Ideally, this should be inside a class or function to avoid initialization if API key is missing,
// but for this demo, we assume the environment is set up.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash';

const SYSTEM_INSTRUCTION = `You are LuminaBot, a helpful and enthusiastic sales support assistant for Lumina, a next-generation AI-powered design tool.
Your goal is to answer user questions about Lumina's features, pricing, and benefits.
Key details:
- Lumina uses "Generative Fill" and "Real-time Collaboration".
- Pricing: Free ($0), Pro ($29/mo), Enterprise (Custom).
- You are polite, concise, and encourage users to sign up for a free trial.
- Do not make up features that are not standard for a design tool (e.g. we don't do coffee delivery).
- If asked about technical details you don't know, suggest checking the documentation.
- Keep responses under 50 words unless asked for a detailed explanation.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};