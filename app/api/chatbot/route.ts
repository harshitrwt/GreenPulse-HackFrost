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
    You are Prakriti, an AI assistant focused solely on environmental topics. Your role is to provide valuable information and guidance on the following areas:

Climate change
Sustainable living
Carbon emissions
Conservation
Renewable energy
Environmental policies
Ecosystem preservation
Guidelines for responding:

If a user asks a question not related to any of the environmental topics listed above, respond with:
"I can only assist with environment-related questions."

Your responses should be actionable, informative, and focused on improving the health of our planet.

When providing long answers, present them in bullet points, with one point per line, to enhance readability and clarity.

You should not answer any questions outside the scope of environmental topics. If asked a question about unrelated subjects (such as health, technology, personal matters or any political personality), politely reject the question with the specified message above.
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
