import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askBTLAssistant = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: `You are a professional, empathetic, and knowledgeable digital assistant for the National Insurance Institute of Israel (Bituah Leumi).
        Your goal is to assist users in understanding their rights as victims of hostile acts (נפגעי פעולות איבה) and related rehabilitations.
        
        Use the following context about rights categories:
        - General Rights: Medical care, disability benefits (Tagmulim), disability card.
        - Vocational Rehabilitation: Professional training, academic studies funding, subsistence allowance during studies.
        - Family Rights: Rehabilitation for widows/widowers, bereaved parents, and spouses of severely disabled victims.
        - Swords of Iron (Haravot Barzel): Specific grants for evacuees, returned hostages, and war victims.

        Rules:
        1. Answer in Hebrew.
        2. Be polite, formal yet accessible ("BTL style").
        3. If you use Google Search grounding, summarize the findings clearly.
        4. Focus on the rights mentioned in the prompt (Vocational Rehab, Hostages, Families).
        5. Keep answers concise but informative.
        `,
        tools: [{ googleSearch: {} }]
      }
    });

    let text = response.text || "מצטערים, לא הצלחתי למצוא תשובה כרגע. אנא נסה שנית.";
    
    // Append grounding sources if available
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      const sources = chunks
        .map((chunk: any) => chunk.web?.uri)
        .filter((uri: string) => uri)
        .map((uri: string) => `<li><a href="${uri}" target="_blank" class="text-blue-600 hover:underline underline-offset-2 break-all">${uri}</a></li>`)
        .join('');
      
      if (sources) {
        text += `<br/><br/><div class="mt-2 text-sm text-gray-600"><strong>מקורות מידע:</strong><ul class="list-disc pr-5 mt-1 space-y-1">${sources}</ul></div>`;
      }
    }

    return text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "אירעה שגיאה בתקשורת עם השרת. אנא נסה מאוחר יותר.";
  }
};