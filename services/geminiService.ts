import { GoogleGenAI, Type, Schema } from "@google/genai";
import { MessAnalysisResult } from "../types";

// Define the schema for the Gemini response
const analysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    healthiestOption: {
      type: Type.STRING,
      description: "The name of the healthiest dish identified on the menu.",
    },
    avoid: {
      type: Type.STRING,
      description: "Which item to avoid or eat less of due to high oil/sugar/carbs.",
    },
    portionGuide: {
      type: Type.STRING,
      description: "Brief advice on how much to eat (e.g., '1 bowl only', 'Unlimited salad').",
    },
    healthScoreColor: {
      type: Type.STRING,
      enum: ["Green", "Yellow", "Red"],
      description: "Green for healthy, Yellow for moderate, Red for unhealthy.",
    },
    swaps: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Simple modifications (e.g., 'Skip the gravy', 'Ask for no butter').",
    },
    reasoning: {
      type: Type.STRING,
      description: "A short sentence explaining why the healthiest option was chosen.",
    }
  },
  required: ["healthiestOption", "avoid", "portionGuide", "healthScoreColor", "swaps", "reasoning"],
};

export const analyzeMessMenu = async (menuText: string): Promise<MessAnalysisResult> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set process.env.API_KEY.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are an expert nutritionist for hostel students. Analyze the following hostel mess menu or food options.
    Your goal is to help a student identify the best option for their health (protein focus, lower oil/sugar).
    
    Menu to analyze:
    "${menuText}"
    
    Provide a strict JSON response.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.3, // Lower temperature for more consistent analysis
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as MessAnalysisResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};

export const analyzeMessImage = async (base64Data: string, mimeType: string): Promise<MessAnalysisResult> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set process.env.API_KEY.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are an expert nutritionist for hostel students. Analyze the provided image of a hostel mess menu (handwritten or printed) or a plate of food.
    Identify the food items visible.
    Your goal is to help a student identify the best option for their health (protein focus, lower oil/sugar) from what is visible.
    
    Provide a strict JSON response adhering to the schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview", // Required for high quality image understanding
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Data
            }
          },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.3,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as MessAnalysisResult;
  } catch (error) {
    console.error("Gemini Image Analysis Error:", error);
    throw error;
  }
};