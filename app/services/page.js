"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const logos = ["/images/A.png", "/images/B.png", "/images/C.png", "/images/D.png", "/images/E.png"];

export default function ServicesPage() {
  const [language, setLanguage] = useState("fr");
  const [active, setActive] = useState(null);
  const [remoteOpen, setRemoteOpen] = useState(false);

  const data = {
    fr: {
      title: "Services sur mesure",
      prompt: "Choisis un module sur la télécommande : l’écran affiche l’essentiel.",
      remote: "Télécommande",
      screen: "Écran",
      placeholder: "Sélectionne un programme",
      sections: [
        {
          id: "intro",
          label: "EM",
          type: "hero",
          headline: "Interventions en milieux professionnels",
          subhead: "Décider en tension, aligner la parole et le corps, rester fiable sous pression.",
          body: "Boxe et aviation comme double boussole : postures, routines, facteurs humains. Sur-mesure pour cabinets, dirigeants, équipes exposées.",
          ctaPrimary: { label: "Parler du besoin", href: "mailto:e.gignier@me.com?subject=Parler%20du%20besoin" },
          ctaSecondary: { label: "Voir les séminaires", href: "/seminaire" },
        },
        {
          id: "interventions",
          label: "Interventions",
          type: "cards",
          cards: [
            { title: "Cabinets & entreprises", description: "Décision en tension, leadership incarné, gestion des imprévus et du conflit.", href: "/contact" },
            { title: "Dirigeants / Comex", description: "Clarifier la parole stratégique, garder le cap, rester audible malgré la pression.", href: "/contact" },
            { title: "Équipes en tension", description: "Aligner les gestes et la communication, sécuriser la coopération sous charge.", href: "/contact" },
          ],
        },
        {
          id: "modules",
          label: "Modules",
          type: "modules",
          modules: [
            { title: "Estime & confiance", duration: "4h", bullets: ["Identifier ses freins", "Affirmer ses ressources", "Discipline mentale"] },
            { title: "Parole claire", duration: "4h", bullets: ["Décoder l’autre", "Prise de parole", "Lien durable"] },
            { title: "Stress & charge", duration: "4h", bullets: ["Prévenir l’épuisement", "Gérer l’énergie", "Récupération"] },
          ],
        },
        {
          id: "quote",
          label: "Approche",
          type: "story",
          paragraphs: [
            "Boxe : sentir le rythme, engager le corps pour décider. Aviation : méthode, checklists, facteurs humains pour rester fiable.",
            "Chaque intervention est construite comme un cockpit : clair, actionnable, avec un retour terrain immédiat.",
          ],
        },
        {
          id: "alpha_links",
          label: "Raccourcis",
          type: "cards",
          cards: [
            { title: "Lexglibres.xyz", description: "Espace anonyme pour libérer la parole et détecter les signaux faibles.", href: "/lexglibres" },
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
        {
          id: "logos",
          label: "Références",
          type: "logos",
        },
      ],
    },
    en: {
      title: "Tailored services",
      prompt: "Pick a module on the remote: the screen shows the essentials.",
      remote: "Remote",
      screen: "Screen",
      placeholder: "Select a program",
      sections: [
        {
          id: "intro",
          label: "Home",
          type: "hero",
          headline: "Professional interventions",
          subhead: "Decide under pressure, align speech and body, stay reliable.",
          body: "Boxing and aviation as twin compasses: posture, routines, human factors. Tailored for firms, leaders, and exposed teams.",
          ctaPrimary: { label: "Discuss your need", href: "mailto:e.gignier@me.com?subject=Discuss%20your%20need" },
          ctaSecondary: { label: "View seminars", href: "/seminaire" },
        },
        {
          id: "interventions",
          label: "Interventions",
          type: "cards",
          cards: [
            { title: "Firms & corporates", description: "Decision under pressure, embodied leadership, handling conflict.", href: "/contact" },
            { title: "Leaders / Exec teams", description: "Clarify strategic speech, hold the course, stay audible under stress.", href: "/contact" },
            { title: "Teams under load", description: "Align gestures and communication, secure cooperation under strain.", href: "/contact" },
          ],
        },
        {
          id: "modules",
          label: "Modules",
          type: "modules",
          modules: [
            { title: "Self-esteem & confidence", duration: "4h", bullets: ["Spot inner brakes", "Assert strengths", "Mental discipline"] },
            { title: "Clear speech", duration: "4h", bullets: ["Decode others", "Public speaking", "Build lasting ties"] },
            { title: "Stress & load", duration: "4h", bullets: ["Prevent burnout", "Manage energy", "Recovery methods"] },
          ],
        },
        {
          id: "quote",
          label: "Approach",
          type: "story",
          paragraphs: [
            "Boxing: feel the rhythm, engage the body to decide. Aviation: method, checklists, human factors to stay reliable.",
            "Each intervention is built like a cockpit: clear, actionable, with immediate field feedback.",
          ],
        },
        {
          id: "alpha_links",
          label: "Shortcuts",
          type: "cards",
          cards: [
            { title: "Lexglibres.xyz", description: "Anonymous space to free speech and surface weak signals.", href: "/lexglibres" },
            { title: "Seminars", description: "Immersive formats inspired by the ring and cockpit to get teams standing up again.", href: "/seminaire" },
            { title: "Interventions", description: "Tailored coaching to decide and communicate under pressure.", href: "/services" },
          ],
        },
        {
          id: "contact",
          label: "Contact",
          type: "contact",
          email: "e.gignier@me.com",
        },
        {
          id: "logos",
          label: "References",
          type: "logos",
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
        <div className="space-y-3 max-w-4xl mx-auto text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{active.headline}</h2>
          <p className="text-lg text-gray-200">{active.subhead}</p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{active.body}</p>
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 pt-2">
            <a
              href={active.ctaPrimary.href}
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
            >
              {active.ctaPrimary.label}
            </a>
            <Link
              href={active.ctaSecondary.href}
              className="px-5 py-2 rounded-full border border-white/40 text-white text-sm font-semibold hover:border-white transition"
            >
              {active.ctaSecondary.label}
            </Link>
          </div>
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
              {card.icon && <div className="text-2xl mb-2">{card.icon}</div>}
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-blue-700 mt-3">→</span>
            </Link>
          ))}
        </div>
      );
    }

    if (active.type === "modules") {
      return (
        <div className="grid md:grid-cols-3 gap-4 w-full">
          {active.modules.map((mod) => (
            <div key={mod.title} className="rounded-2xl bg-white text-black p-5 shadow-lg space-y-2">
              <h3 className="text-lg font-semibold">{mod.title}</h3>
              <p className="text-sm text-gray-700">{language === "fr" ? `Durée : ${mod.duration}` : `Duration: ${mod.duration}`}</p>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {mod.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (active.type === "logos") {
      return (
        <div className="rounded-2xl bg-white text-black p-6 shadow-lg">
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center justify-items-center">
            {logos.map((logo) => (
              <img key={logo} src={logo} alt="Logo" className="h-16 w-auto object-contain" />
            ))}
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
