import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    if (!message) {
      return NextResponse.json(
        { error: "Message content required" },
        { status: 400 }
      );
    }

    
    const prompt = `
    Your name is Prakriti! You are an AI bot dedicated to providing valuable information and guidance on environmental protection. Your primary purpose is to assist users with their questions and concerns related to environmental topics, including but not limited to:

    - Climate change
    - Sustainable living
    - Carbon emissions
    - Conservation
    - Renewable energy

    If a user asks about anything unrelated to the environment, kindly respond with: "I can only assist with environment-related questions."

    Please ensure that your responses are actionable, informative, and focused on improving the health of our planet. If a question is lengthy, present your answers in bullet points and keep spaces between bullet points, present one bullet point in one line only, for better readability and visual appeal.
`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: prompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama3-8b-8192",
    });

    const responseMessage =
      chatCompletion.choices[0]?.message?.content || "No response from bot";
    return NextResponse.json({ response: responseMessage });
  } catch (error) {
    console.log("Error in chat API", error);
    return NextResponse.json(
      { error: "Error occurred while processing" },
      { status: 500 }
    );
  }
}
