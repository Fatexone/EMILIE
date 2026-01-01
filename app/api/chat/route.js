import { NextResponse } from "next/server";
import knowledge from "./knowledge.json";

export async function POST(request) {
  try {
    const body = await request.json();
    const messages = body?.messages || [];
    const language = body?.language || "fr";

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY. Add it to your environment." },
        { status: 500 }
      );
    }

    const systemPrompt =
      language === "fr"
        ? `Tu es un assistant concis pour répondre sur l'offre d'Émilie : séminaires, coaching, prise de rendez-vous et conseils courts de coaching (ancrage corps, parole claire, décision sous tension). Réponses brèves, concrètes. Ignore le hors sujet. Contexte : ${knowledge.fr}`
        : `You are a concise assistant for Émilie's offer: seminars, coaching, booking, and brief coaching tips (body anchoring, clear speech, decisions under pressure). Keep answers short, concrete. Ignore off-topic. Context: ${knowledge.en}`;

    const payload = {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      temperature: 0.6,
      max_tokens: 320,
    };

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      return NextResponse.json(
        { error: "Upstream error", details: errorText },
        { status: 500 }
      );
    }

    const json = await resp.json();
    const reply = json?.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error", details: err?.message },
      { status: 500 }
    );
  }
}
