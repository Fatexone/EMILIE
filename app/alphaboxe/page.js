"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AlphaboxePage() {
  const [language, setLanguage] = useState("fr");
  const [active, setActive] = useState(null);
  const [remoteOpen, setRemoteOpen] = useState(false);

  const data = {
    fr: {
      title: "Alphaboxe",
      prompt: "Sélectionne un programme sur la télécommande, l’écran affiche le contenu.",
      remote: "Télécommande",
      screen: "Écran",
      placeholder: "Choisis un programme",
      sections: [
        {
          id: "intro",
          label: "EM",
          type: "hero",
          quote: "La vie est un combat. Celui qui refuse le combat refuse la vie.",
          headline: "Corps, parole, stratégie",
          subhead: "Pour décider en tension et tenir dans l’incertitude.",
          bullets: [
            "Intelligence du corps + rigueur du cockpit.",
            "Décider vite, clair, en équipe.",
            "Ouvrir la parole, protéger l’énergie.",
          ],
          ctaPrimary: { label: "Parler du besoin", href: "mailto:e.gignier@me.com?subject=Parler%20du%20besoin" },
          ctaSecondary: { label: "Voir les séminaires", href: "/seminaire" },
        },
        {
          id: "promesse",
          label: "Promesse",
          type: "story",
          paragraphs: [
            "Alphaboxe relie l’intuition du ring et la discipline du cockpit. Postures, checklists, facteurs humains.",
            "Une pédagogie qui engage le corps, la parole et la décision pour transformer les pratiques managériales.",
          ],
        },
        {
          id: "piliers",
          label: "Piliers",
          type: "pillars",
          items: [
            { title: "Décider en tension", body: "Clarté, vitesse, lucidité quand le contexte se resserre." },
            { title: "Aligner corps & parole", body: "Une posture incarnée, une communication qui tient sous pression." },
            { title: "Protéger l’énergie", body: "Gestion de l’effort, récupération, prévention de la charge." },
            { title: "Ouvrir la parole", body: "Des espaces sûrs pour révéler les signaux faibles." },
          ],
        },
        {
          id: "liens",
          label: "Raccourcis",
          type: "cards",
          cards: [
            { title: "Lexglibres.xyz", description: "Espace anonyme pour libérer la parole et capter les signaux faibles.", href: "/lexglibres" },
            { title: "Séminaires", description: "Immersions inspirées du ring et du cockpit pour remettre les équipes debout.", href: "/seminaire" },
            { title: "Interventions", description: "Coaching et accompagnement sur mesure pour décider sous tension.", href: "/services" },
          ],
        },
        {
          id: "contact",
          label: "Contact",
          type: "contact",
          email: "e.gignier@me.com",
        },
      ],
    },
    en: {
      title: "Alphaboxe",
      prompt: "Pick a program on the remote; the screen shows the content.",
      remote: "Remote",
      screen: "Screen",
      placeholder: "Select a program",
      sections: [
        {
          id: "intro",
          label: "Home",
          type: "hero",
          quote: "Life is a fight. Whoever refuses the fight refuses life.",
          headline: "Body, speech, strategy",
          subhead: "To decide under pressure and hold in uncertainty.",
          bullets: [
            "Embodied intelligence + cockpit rigor.",
            "Decide fast, clear, as a team.",
            "Open speech, protect energy.",
          ],
          ctaPrimary: { label: "Discuss your need", href: "mailto:e.gignier@me.com?subject=Discuss%20your%20need" },
          ctaSecondary: { label: "View seminars", href: "/seminaire" },
        },
        {
          id: "promesse",
          label: "Promise",
          type: "story",
          paragraphs: [
            "Alphaboxe connects the instinct of the ring and the discipline of the cockpit. Posture, checklists, human factors.",
            "A pedagogy that engages body, speech, and decision to transform leadership practices.",
          ],
        },
        {
          id: "piliers",
          label: "Pillars",
          type: "pillars",
          items: [
            { title: "Decide under pressure", body: "Clarity, speed, lucidity when the context tightens." },
            { title: "Align body & speech", body: "Embodied posture, communication that holds under pressure." },
            { title: "Protect energy", body: "Manage effort, recover, prevent overload." },
            { title: "Open speech", body: "Safe spaces to surface weak signals." },
          ],
        },
        {
          id: "liens",
          label: "Shortcuts",
          type: "cards",
          cards: [
            { title: "Lexglibres.xyz", description: "Anonymous space to free speech and capture weak signals.", href: "/lexglibres" },
            { title: "Seminars", description: "Immersions inspired by ring and cockpit to get teams back on their feet.", href: "/seminaire" },
            { title: "Interventions", description: "Tailored coaching to decide and communicate under pressure.", href: "/services" },
          ],
        },
        {
          id: "contact",
          label: "Contact",
          type: "contact",
          email: "e.gignier@me.com",
        },
      ],
    },
  };

  const current = data[language];

  useEffect(() => {
    setActive(null);
    setRemoteOpen(false);
  }, [language]);

  const renderContent = () => {
    if (!active) {
      return <p className="text-lg sm:text-xl font-semibold text-white opacity-60 text-center">{current.placeholder}</p>;
    }

    if (active.type === "hero") {
      return (
        <div className="rounded-2xl bg-white text-black p-6 shadow-lg space-y-4 max-w-4xl mx-auto">
          <p className="text-gray-700 italic text-lg">“{active.quote}”</p>
          <h2 className="text-2xl sm:text-3xl font-bold">{active.headline}</h2>
          <p className="text-lg text-gray-800">{active.subhead}</p>
          <ul className="space-y-2 text-gray-800">
            {active.bullets.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span className="text-gray-500 mt-1">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={active.ctaPrimary.href}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition text-center"
            >
              {active.ctaPrimary.label}
            </a>
            <Link
              href={active.ctaSecondary.href}
              className="px-5 py-2 rounded-full border border-gray-800 text-black text-sm font-semibold hover:bg-gray-100 transition text-center"
            >
              {active.ctaSecondary.label}
            </Link>
          </div>
        </div>
      );
    }

    if (active.type === "story") {
      return (
        <div className="rounded-2xl bg-white text-black p-6 shadow-lg space-y-3 max-w-4xl mx-auto text-left">
          {active.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base leading-relaxed text-gray-800">
              {p}
            </p>
          ))}
        </div>
      );
    }

    if (active.type === "pillars") {
      return (
        <div className="grid sm:grid-cols-2 gap-4 w-full">
          {active.items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white text-black p-5 shadow-lg space-y-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      );
    }

    if (active.type === "cards") {
      return (
        <div className="grid gap-4 md:grid-cols-3 w-full">
          {active.cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl p-5 bg-white text-black hover:-translate-y-1 transition shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-blue-700 mt-3">→</span>
            </Link>
          ))}
        </div>
      );
    }

    if (active.type === "contact") {
      return (
        <div className="rounded-2xl bg-white text-black p-6 shadow-lg space-y-3 max-w-md mx-auto text-center">
          <h3 className="text-xl font-semibold">{language === "fr" ? "Contact" : "Get in touch"}</h3>
          <p className="text-gray-700">{language === "fr" ? "Écrivez directement :" : "Write directly:"}</p>
          <a href={`mailto:${active.email}`} className="text-blue-700 font-semibold">
            {active.email}
          </a>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="bg-[#f7f7f8] text-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black">{current.title}</h1>
            <p className="text-base sm:text-lg text-gray-700">{current.prompt}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                language === "fr" ? "bg-white text-black border-black" : "bg-transparent text-black border-gray-400 hover:border-black"
              }`}
            >
              🇫🇷 FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                language === "en" ? "bg-white text-black border-black" : "bg-transparent text-black border-gray-400 hover:border-black"
              }`}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-center">
          <div className="flex flex-col items-start gap-2">
            <button
              onClick={() => setRemoteOpen((v) => !v)}
              className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-xs font-semibold text-black bg-white"
            >
              {language === "fr" ? (remoteOpen ? "Replier la télécommande" : "Ouvrir la télécommande") : remoteOpen ? "Hide remote" : "Show remote"}
            </button>

            <div
              className={`inline-flex flex-col gap-1 w-auto max-w-[190px] min-w-[130px] shrink-0 rounded-xl border border-gray-200 bg-white p-2 ${
                remoteOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="text-[11px] text-gray-700">{current.remote}</div>
              {current.sections.map((section) => {
                const isActive = active?.id === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActive(section)}
                    className={`w-full text-left px-2 py-1.5 rounded-lg border transition text-xs ${
                      isActive ? "bg-gray-100 text-black border-gray-400" : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-sm font-semibold leading-tight">{section.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 w-full rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white p-6 space-y-6 min-h-[320px]" style={{ color: "#000" }}>
            <div className="text-xs text-gray-600 uppercase tracking-wide">{current.screen}</div>
            <div className="relative rounded-2xl border border-gray-200 bg-white min-h-[260px] flex items-center justify-center text-center px-6">
              <div className="w-full">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
