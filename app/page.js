"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [language, setLanguage] = useState("fr");
  const [active, setActive] = useState(null);
  const [remoteOpen, setRemoteOpen] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState({});
  const [visibleKeywords, setVisibleKeywords] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState("");
  const phrasesFr = [
    "Décider en tension, rester clair.",
    "Lire les signaux faibles.",
    "Ancrer le corps, apaiser le mental.",
    "Clarté avant vitesse.",
    "Briefer, agir, débriefer.",
    "Respirer pour décider.",
    "Voir loin, agir près.",
    "Posture et parole alignées.",
    "Parler juste, agir net.",
    "Savoir attendre, savoir partir.",
    "Naviguer dans l’incertitude.",
    "Rebondir sans précipitation.",
    "Rythme et récupération.",
    "Énergie maîtrisée, impact ciblé.",
    "Écouter ce qui ne se dit pas.",
    "Tenir le cap sous pression.",
    "S’ancrer pour mieux bouger.",
    "Transformer la peur en cap.",
    "Coordination corps-esprit.",
    "Observer avant de trancher.",
    "Amorcer le mouvement juste.",
    "Dialogue franc, geste sûr.",
    "Réguler avant de pousser.",
    "Cohérence en équipe.",
    "Lucidité en turbulence.",
    "Micro-décisions, macro-impact.",
    "Équilibre entre force et souplesse.",
    "Savoir lever le pied.",
    "Choisir ses combats.",
    "Clair pour soi, clair pour l’équipe.",
    "Stabilité intérieure, mouvement extérieur.",
    "Préparer, exécuter, apprendre.",
    "Lire le tempo collectif.",
    "Confiance qui se construit.",
    "S’écouter pour mieux agir.",
    "Regarder autrement, décider autrement.",
    "Faire simple sous pression.",
    "Ne pas confondre vitesse et précipitation.",
    "Travailler le réflexe juste.",
    "Aligner intentions et actions.",
    "Oser dire, oser faire.",
    "Recentrer pour avancer.",
    "Éthique et efficacité.",
    "Cadre clair, gestes libres.",
    "Anticiper sans s’épuiser.",
    "Garder du jeu dans le système.",
    "Rester humain en tension.",
    "Apprendre de chaque round.",
    "Adapter sans renoncer.",
  ];
  const phrasesEn = [
    "Decide under pressure, stay clear.",
    "Read weak signals.",
    "Anchor the body, calm the mind.",
    "Clarity before speed.",
    "Brief, act, debrief.",
    "Breathe to decide.",
    "See far, act near.",
    "Aligned posture and speech.",
    "Speak clean, act sharp.",
    "Know when to wait, when to go.",
    "Navigate uncertainty.",
    "Bounce back without rushing.",
    "Rhythm and recovery.",
    "Energy under control, impact targeted.",
    "Listen to what’s unsaid.",
    "Hold course under pressure.",
    "Grounded to move better.",
    "Turn fear into heading.",
    "Body-mind coordination.",
    "Observe before you cut.",
    "Start the right movement.",
    "Candid words, sure moves.",
    "Regulate before pushing.",
    "Team coherence.",
    "Lucidity in turbulence.",
    "Micro decisions, macro impact.",
    "Balance force and flexibility.",
    "Know when to ease off.",
    "Choose your fights.",
    "Clear for self, clear for team.",
    "Inner stability, outer motion.",
    "Prepare, execute, learn.",
    "Read the team tempo.",
    "Confidence built over time.",
    "Listen to act better.",
    "See differently, decide differently.",
    "Keep it simple under pressure.",
    "Don’t confuse speed with haste.",
    "Train the right reflex.",
    "Align intent and action.",
    "Dare to say, dare to do.",
    "Recentre to move forward.",
    "Ethics and efficiency.",
    "Clear frame, free moves.",
    "Anticipate without burning out.",
    "Keep slack in the system.",
    "Stay human under strain.",
    "Learn from every round.",
    "Adapt without giving up.",
  ];

  const data = {
    fr: {
      title: "Émilie Gignier — Debout, même sans gants",
      prompt: "Accueil, Services, Séminaires, Outils : tout se pilote d’ici.",
      remote: "Navigation",
      placeholder: "Choisis une section",
      formats: [
        { title: "Round – 90 min", description: "1 enjeu, 1 levier d’action immédiat. Présentiel ou distanciel." },
        { title: "Stage “Combattre” – 1 journée", description: "3 ateliers expérientiels, 1 feuille de route. Diagnostic – Action – Ancrage." },
        { title: "Programme “Debout” – 6 semaines", description: "Boxe, aviation, facteurs humains, cognition. Parcours structuré." },
      ],
      highlights: [
        "Pédagogie fondée sur les facteurs humains et les neurosciences du combat.",
        "Méthode inspirée de l'aviation et de la boxe pour décider en tension.",
        "Outils concrets pour réguler, avancer, rebondir durablement.",
      ],
      themesList: [
        ["\"Monter\"", "Surmonter l’appréhension, entrer dans l’arène"],
        ["\"Tenir\"", "Gérer les imprévus, maintenir l'engagement"],
        ["\"Tomber\"", "Faire de la chute un apprentissage"],
        ["\"Naviguer en soi\"", "Réguler ses émotions, affiner ses perceptions"],
        ["\"Tenir le cap\"", "Construire une stratégie humaine et durable"],
      ],
      quote:
        "On parle vrai, ancré dans le corps. On transmet des outils concrets, pensés comme un cockpit : chaque geste sert à avancer.",
      sections: [
        {
          id: "intro",
          label: "EM",
          type: "hero",
          headline: "Émilie Gignier",
          subhead: "Cheffe d’entreprise, boxeuse, pilote privé et mère de quatre enfants",
          body: "Chaque expérience forge ma façon d’agir : faire corps avec mes décisions, lire les tensions, ajuster le geste. Boxe et aviation comme double boussole pour accompagner celles et ceux qui veulent tenir le cockpit : leadership incarné, parole claire, navigation dans l’incertitude.",
          ctaPrimary: { label: "Chat Émilie", href: "https://www.emiliegignier.com/#chat_emilie" },
        },
        {
          id: "temoignages",
          label: "Témoignages",
          type: "testimonials",
          items: [
            { quote: "Un choc doux : nos dirigeants ont retrouvé un cap commun en 2 heures.", author: "Associé, cabinet d’avocats" },
            { quote: "Enfin un séminaire qui met le corps et la décision au centre, sans jargon.", author: "DRH, entreprise tech" },
            { quote: "Elle m’a appris à parler clair même en turbulence. On repart avec des gestes simples qui tiennent.", author: "CEO, industrie" },
            { quote: "Des images de cockpit pour décider en équipe. On ressort alignés et équipés.", author: "Associée, cabinet de conseil" },
            { quote: "Du ring au board : posture, souffle, mots justes. Mes managers appliquent dès le lendemain.", author: "Directrice des opérations" },
            { quote: "Une pédagogie incarnée, zéro poudre aux yeux. Ça ancre et ça rassure.", author: "Fondateur, startup fintech" },
            { quote: "La boxe comme métaphore, l’aviation comme méthode. Puissant et concret.", author: "Avocate associée" },
            { quote: "On comprend enfin comment réguler l’énergie de l’équipe sur la durée.", author: "Responsable BU, retail" },
            { quote: "Les signaux faibles deviennent des décisions claires. Ça change la dynamique de nos comités.", author: "Partner, cabinet d’audit" },
            { quote: "Elle ouvre la parole, même chez les profils les plus réservés. Impact immédiat.", author: "Coach sportif et boxeuse" },
            { quote: "Structuré, humain, efficace. On sent l’expérience terrain derrière chaque outil.", author: "DRH, secteur public" },
          ],
        },
        {
          id: "interventions",
          label: "Interventions",
          type: "interventions",
          title: "Interventions en milieux professionnels",
          intro1: "Décider en tension, aligner la parole et le corps, rester fiable sous pression.",
          intro2: "Boxe et aviation comme double boussole : postures, routines, facteurs humains. Sur-mesure pour cabinets, dirigeants, équipes exposées.",
          cards: [
            { title: "Conseil dirigeants", description: "Interventions sur mesure pour cabinets et organisations sous tension.", href: "/services" },
            { title: "Formations ciblées", description: "Leadership incarné, parole claire, décisions en mouvement.", href: "/services" },
            { title: "Coaching exécutif", description: "1:1 pour tenir le cap et embarquer les équipes.", href: "/services" },
          ],
        },
        {
          id: "modules",
          label: "Modules",
          type: "modules",
          modules: [
            { title: "Estime & confiance", duration: "1h30", bullets: ["Identifier ses freins", "Affirmer ses ressources", "Discipline mentale"] },
            { title: "Parole claire", duration: "1h30", bullets: ["Décoder l’autre", "Prise de parole", "Lien durable"] },
            { title: "Stress & charge", duration: "1h30", bullets: ["Prévenir l’épuisement", "Gérer l’énergie", "Récupération"] },
            { title: "Mouvement", duration: "1h30", bullets: ["Mobiliser sans s’épuiser", "Geste juste", "Rythme et respiration"] },
            { title: "Placement", duration: "1h30", bullets: ["Trouver sa place dans l’échange", "Gérer distance et intensité", "Stabilité et ancrage"] },
            { title: "Equation : j’y vais / j’attends / je pars", duration: "1h30", bullets: ["Lire le moment d’agir", "Décider en tension", "Passer à l’action avec clarté"] },
          ],
        },
        {
          id: "references",
          label: "Références",
          type: "logos",
        },
        {
          id: "seminaires",
          label: "Séminaires",
          type: "cards",
          cards: [
            { title: "Round – 90 min", description: "1 enjeu, 1 levier immédiat. Présentiel ou distanciel.", href: "/seminaire" },
            { title: "Stage “Combattre” – 1 journée", description: "3 ateliers expérientiels, 1 feuille de route. Diagnostic – Action – Ancrage.", href: "/seminaire" },
            { title: "Programme “Debout” – 6 semaines", description: "Boxe, aviation, facteurs humains, cognition. Parcours structuré.", href: "/seminaire" },
          ],
        },
        {
          id: "sem_video",
          label: "Vidéo",
          type: "video",
          src: "/images/EM.MP4",
        },
        {
          id: "sem_fragments",
          label: "Mots-clés",
          type: "fragments",
          items: [
            "Stratégie",
            "Tactique",
            "Navigation en tension",
            "Facteurs humains",
            "Posture",
            "Parole claire",
            "Énergie",
            "Récupération",
            "Lecture du ring",
            "Ancrage",
            "Respiration",
            "Tempo",
            "Recalage",
            "Récup active",
            "Préparation mentale",
            "Intention",
            "Distance",
            "Angles",
            "Alignement",
            "Clarté",
            "Écoute",
            "Silence utile",
            "Observation",
            "Rythme",
            "Gestion du stress",
            "Micro-décisions",
            "Feedback instantané",
            "Cohérence",
            "Plan B",
            "Sortie de crise",
            "Confiance",
            "Lucidité",
          ],
        },
        {
          id: "sem_formats",
          label: "Formats",
          type: "formats",
        },
        {
          id: "outils",
          label: "Mes outils",
          type: "cards",
          intro: {
            title: "Ce que vous allez traverser",
            bullets: [
              "Pédagogie fondée sur les facteurs humains et les neurosciences du combat.",
              "Méthode inspirée de l'aviation et de la boxe pour décider en tension.",
              "Outils concrets pour réguler, avancer, rebondir durablement.",
            ],
          },
          cards: [
            { title: "Lexglibres.xyz", description: "Libérer la parole, capter les signaux faibles, agir vite et juste.", href: "/lexglibres" },
            { title: "Kits pratiques", description: "Briefs, checklists, routines pour décider sous tension.", href: "/lexglibres" },
            { title: "Alphaboxe", description: "Méthode corps/parole/stratégie pour décider en tension.", href: "/alphaboxe" },
          ],
        },
        {
          id: "contact",
          label: "Contact",
          type: "contact",
          email: "egignier@em-conseil.org",
        },
        {
          id: "chat_emilie",
          label: "Chat Émilie",
          type: "chat",
        },
      ],
    },
    en: {
      title: "Émilie Gignier — single cockpit",
      prompt: "Home, Services, Seminars, Tools: everything from here.",
      remote: "Navigation",
      placeholder: "Select a section",
      formats: [
        { title: "Round – 90 min", description: "One challenge, one immediate lever. In person or online." },
        { title: "“Fight” workshop – 1 day", description: "3 experiential workshops, 1 roadmap. Diagnose – Act – Anchor." },
        { title: "“Stand Up” program – 6 weeks", description: "Boxing, aviation, human factors, cognition. Structured path." },
      ],
      highlights: [
        "Human-factor method: read tension, decide cleanly, recover fast.",
        "Aviation + boxing mindset: brief, act, debrief — under pressure.",
        "Practical tools to regulate, move, and rebound when it counts.",
      ],
      themesList: [
        ["\"Climb\"", "Enter the arena despite fear"],
        ["\"Hold\"", "Handle the unexpected, keep engagement"],
        ["\"Fall\"", "Turn falling into learning"],
        ["\"Navigate within\"", "Regulate emotions, refine perceptions"],
        ["\"Stay the course\"", "Build a durable, human strategy"],
      ],
      quote:
        "Plain words, grounded in the body. Quiet tools, meant to help you act and stay the course.",
      sections: [
        {
          id: "intro",
          label: "Home",
          type: "hero",
          headline: "Émilie Gignier",
          subhead: "Business leader, boxer, private pilot, and mother of four",
          body: "Every path shaped how I act under pressure: embody decisions, read tension, adjust the move. Boxing and aviation as twin guides to help leaders stay in the cockpit: embodied leadership, clear speech, navigating uncertainty.",
          ctaPrimary: { label: "Chat with Émilie", href: "https://www.emiliegignier.com/#chat_emilie" },
        },
        {
          id: "temoignages",
          label: "Testimonials",
          type: "testimonials",
          items: [
            { quote: "A soft shock: our partners found a common heading in 2 hours.", author: "Partner, law firm" },
            { quote: "Finally a seminar that centers body and decision, without jargon.", author: "HR Director, tech company" },
            { quote: "She taught me to speak clearly even in turbulence. Simple moves that stick.", author: "CEO, industry" },
            { quote: "Cockpit metaphors to decide as a team. We left aligned and equipped.", author: "Partner, consulting firm" },
            { quote: "From ring to board: posture, breath, precise words. My managers applied next day.", author: "COO" },
            { quote: "Embodied pedagogy, zero fluff. It anchors and reassures.", author: "Founder, fintech startup" },
            { quote: "Boxing as metaphor, aviation as method. Powerful and concrete.", author: "Partner, law firm" },
            { quote: "We finally know how to regulate the team’s energy over time.", author: "BU lead, retail" },
            { quote: "Weak signals become clear decisions. It changed our exec meetings.", author: "Partner, audit firm" },
            { quote: "She opens speech, even for the most reserved profiles. Immediate impact.", author: "Coach & boxer" },
            { quote: "Structured, human, effective. You feel field experience behind each tool.", author: "HR Director, public sector" },
          ],
        },
        {
          id: "interventions",
          label: "Interventions",
          type: "interventions",
          title: "Professional interventions",
          intro1: "Decide under pressure, align speech and body, stay reliable.",
          intro2: "Boxing + aviation as twin compass: posture, routines, human factors. Tailored for firms, leaders, exposed teams.",
          cards: [
            { title: "Advisory for leaders", description: "Tailored interventions for firms and teams under pressure.", href: "/services" },
            { title: "Focused trainings", description: "Embodied leadership, clear speech, decisions in motion.", href: "/services" },
            { title: "Executive coaching", description: "1:1 support to hold the line and bring teams onboard.", href: "/services" },
          ],
        },
        {
          id: "modules",
          label: "Modules",
          type: "modules",
          modules: [
            { title: "Self-esteem & confidence", duration: "1h30", bullets: ["Spot inner brakes", "Assert strengths", "Mental discipline"] },
            { title: "Clear speech", duration: "1h30", bullets: ["Decode others", "Public speaking", "Build lasting ties"] },
            { title: "Stress & load", duration: "1h30", bullets: ["Prevent burnout", "Manage energy", "Recovery methods"] },
            { title: "Movement", duration: "1h30", bullets: ["Mobilize without draining", "Precise gesture", "Rhythm and breath"] },
            { title: "Placement", duration: "1h30", bullets: ["Find your place in dialogue", "Handle distance and intensity", "Stability and grounding"] },
            { title: "Equation: go / wait / break", duration: "1h30", bullets: ["Read the moment to act", "Decide under tension", "Move with clarity"] },
          ],
        },
        {
          id: "references",
          label: "References",
          type: "logos",
        },
        {
          id: "seminaires",
          label: "Seminars",
          type: "cards",
          cards: [
            { title: "Round – 90 min", description: "One challenge, one immediate lever. In person or online.", href: "/seminaire" },
            { title: "“Fight” workshop – 1 day", description: "3 experiential workshops, 1 roadmap. Diagnose – Act – Anchor.", href: "/seminaire" },
            { title: "“Stand Up” program – 6 weeks", description: "Boxing, aviation, human factors, cognition. Structured path.", href: "/seminaire" },
          ],
        },
        {
          id: "sem_video",
          label: "Video",
          type: "video",
          src: "/images/EM.MP4",
        },
        {
          id: "sem_fragments",
          label: "Keywords",
          type: "fragments",
          items: [
            "Strategy",
            "Tactics",
            "Navigate pressure",
            "Human factors",
            "Posture",
            "Clear speech",
            "Energy",
            "Recovery",
            "Ring reading",
            "Grounding",
            "Breath",
            "Tempo",
            "Recalibration",
            "Active recovery",
            "Mental prep",
            "Intent",
            "Distance",
            "Angles",
            "Alignment",
            "Clarity",
            "Listening",
            "Useful silence",
            "Observation",
            "Rhythm",
            "Stress control",
            "Micro-decisions",
            "Instant feedback",
            "Coherence",
            "Plan B",
            "Crisis exit",
            "Confidence",
            "Lucidity",
          ],
        },
        {
          id: "sem_formats",
          label: "Formats",
          type: "formats",
        },
        {
          id: "outils",
          label: "Tools",
          type: "cards",
          intro: {
            title: "What you'll go through",
            bullets: [
              "Human-factor method: read tension, decide cleanly, recover fast.",
              "Aviation + boxing mindset: brief, act, debrief — under pressure.",
              "Practical tools to regulate, move, and rebound when it counts.",
            ],
          },
          cards: [
            { title: "Lexglibres.xyz", description: "Free the speech, capture weak signals, act fast and right.", href: "/lexglibres" },
            { title: "Practical kits", description: "Briefs, checklists, routines to decide under pressure.", href: "/lexglibres" },
            { title: "Alphaboxe", description: "Body/speech/strategy method to decide under pressure.", href: "/alphaboxe" },
          ],
        },
        {
          id: "contact",
          label: "Contact",
          type: "contact",
          email: "egignier@em-conseil.org",
        },
        {
          id: "chat_emilie",
          label: "Chat Emilie",
          type: "chat",
        },
      ],
    },
  };

  const current = data[language];
  const sectionMap = Object.fromEntries(current.sections.map((s) => [s.id, s]));
  const groups = [
    { title: language === "fr" ? "Accueil" : "Home", ids: ["intro", "temoignages"] },
    { title: language === "fr" ? "Services" : "Services", ids: ["interventions", "modules", "references"] },
    { title: language === "fr" ? "Séminaires" : "Seminars", ids: ["sem_video", "sem_fragments", "sem_formats"] },
    { title: language === "fr" ? "Méthode" : "Method", ids: ["outils"] },
    { title: language === "fr" ? "Contact" : "Contact", ids: ["contact"] },
    { title: language === "fr" ? "Chat Émilie" : "Chat Emilie", ids: ["chat_emilie"] },
  ];

  useEffect(() => {
    setRemoteOpen(false);
    const intro = current.sections.find((s) => s.id === "intro") || null;
    setActive(intro);
    setExpandedGroups({});
    setChatMessages([
      {
        role: "assistant",
        content:
          current.title === "Debout. Même sans gants."
            ? "Pose ta question à Émilie (coach) : boxe, aviation, facteurs humains, décision en tension."
            : "Ask Emilie (coach) anything: boxing, aviation, human factors, decisions under pressure.",
      },
    ]);
    setChatInput("");
    setChatError("");
  }, [language]);

  useEffect(() => {
    // mots-clés: on initialise la liste, changement seulement au clic (pas d'interval)
    if (active?.type === "fragments") {
      const pool = active.items || [];
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      setVisibleKeywords(shuffled.slice(0, Math.min(8, shuffled.length)));
    } else {
      setVisibleKeywords([]);
    }
  }, [active?.id, active?.items]);

  const renderContent = () => {
    if (!active) {
      return <p className="text-lg sm:text-xl font-semibold text-black opacity-80 text-center">{current.placeholder}</p>;
    }

    if (active.type === "hero") {
      const chatGroupTitle = language === "fr" ? "Chat Émilie" : "Chat Emilie";
      const handleChatClick = (event) => {
        event.preventDefault();
        const chatSection = sectionMap["chat_emilie"];
        if (chatSection) {
          setExpandedGroups((prev) => ({ ...prev, [chatGroupTitle]: true }));
          setActive(chatSection);
          const anchor = document.getElementById("chat_emilie");
          if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      };

      return (
        <div className="space-y-3 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <img
              src="/images/TOF.jpg"
              alt={active.headline}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-200 shadow-xl"
            />
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black">{active.headline}</h2>
              <p className="text-lg text-gray-800">{active.subhead}</p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{active.body}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href={active.ctaPrimary.href}
              onClick={handleChatClick}
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
            >
              {active.ctaPrimary.label}
            </a>
            {active.ctaSecondary && (
              <Link
                href={active.ctaSecondary.href}
                className="px-5 py-2 rounded-full border border-gray-400 text-black text-sm font-semibold hover:border-black transition"
              >
                {active.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>
      );
    }

    if (active.type === "cards") {
      return (
        <div className="space-y-4">
          {active.intro && (
            <div className="rounded-2xl bg-white text-black p-5 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">{active.intro.title}</h3>
              <ul className="space-y-1 text-gray-800 text-base">
                {active.intro.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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

    if (active.type === "testimonials") {
      return (
        <div className="grid gap-4 md:grid-cols-2 w-full">
          {active.items.map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white text-black p-5 shadow-lg">
              <p className="text-gray-800 italic">“{item.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-gray-900">{item.author}</p>
            </div>
          ))}
        </div>
      );
    }

    if (active.type === "interventions") {
      return (
        <div className="space-y-4 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white text-black p-6 shadow-lg space-y-2">
            <h3 className="text-2xl font-semibold">{active.title}</h3>
            <p className="text-gray-800">{active.intro1}</p>
            <p className="text-gray-700">{active.intro2}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 w-full">
            {active.cards.map((card) => (
              <div key={card.title} className="rounded-2xl p-5 bg-white text-black hover:-translate-y-1 transition shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (active.type === "fragments") {
      const gradients = [
        "bg-gradient-to-r from-indigo-50 via-white to-cyan-50",
        "bg-gradient-to-r from-rose-50 via-white to-orange-50",
        "bg-gradient-to-r from-emerald-50 via-white to-blue-50",
        "bg-gradient-to-r from-slate-50 via-white to-purple-50",
        "bg-gradient-to-r from-yellow-50 via-white to-lime-50",
      ];
      const gradientClass = gradients[Math.floor(Math.random() * gradients.length)];
      return (
        <div className={`rounded-2xl p-6 shadow-lg space-y-3 max-w-3xl mx-auto text-center border border-gray-200 ${gradientClass}`}>
          <button
            onClick={() => {
              const pool = active.items || [];
              const shuffled = [...pool].sort(() => 0.5 - Math.random());
              setVisibleKeywords(shuffled.slice(0, Math.min(8, shuffled.length)));
            }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold bg-white/70 hover:bg-white"
          >
            {language === "fr" ? "Nouveaux mots-clés" : "Refresh keywords"}
          </button>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {(visibleKeywords.length ? visibleKeywords : active.items).map((kw) => (
              <span
                key={kw}
                className="px-3 py-1.5 rounded-full border border-gray-300 bg-white/80 text-sm font-semibold text-black"
              >
                {kw}
              </span>
            ))}
          </div>
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

    if (active.type === "video") {
      return (
        <div className="rounded-2xl bg-white text-black p-4 shadow-lg max-w-4xl mx-auto">
          <video controls className="w-full rounded-xl border border-gray-200" src={active.src} />
        </div>
      );
    }

    if (active.type === "formats") {
      const list = current.formats || [];
      return (
        <div className="grid gap-4 md:grid-cols-3 w-full">
          {list.map((item) => (
            <div key={item.title} className="rounded-2xl p-5 bg-white text-black hover:-translate-y-1 transition shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      );
    }

    if (active.type === "highlights") {
      const list = current.highlights || [];
      return (
        <div className="rounded-2xl bg-white text-black p-6 shadow-lg space-y-2 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold">{language === "fr" ? "Ce que vous allez traverser" : "What you'll go through"}</h3>
          <ul className="space-y-2 text-lg text-gray-800">
            {list.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gray-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (active.type === "themes") {
      const list = current.themesList || [];
      return (
        <div className="rounded-2xl bg-white text-black p-6 shadow-lg space-y-3 max-w-4xl mx-auto text-left">
          <div className="grid md:grid-cols-2 gap-3">
            {list.map(([label, desc]) => (
              <div key={label} className="rounded-2xl p-5 shadow-sm bg-white border border-gray-200">
                <p className="text-lg font-semibold text-black">{label}</p>
                <p className="text-gray-700 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (active.type === "quote") {
      return (
        <div className="rounded-2xl bg-white text-black p-6 shadow-lg space-y-2 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold">{language === "fr" ? "Pourquoi ces séminaires sont différents" : "Why these seminars are different"}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{current.quote}</p>
        </div>
      );
    }

    if (active.type === "chat") {
      return (
        <div id="chat_emilie">
          <ChatBox
            messages={chatMessages}
            input={chatInput}
            setInput={setChatInput}
            onSend={async () => {
              if (!chatInput.trim() || chatLoading) return;
              const userMessage = { role: "user", content: chatInput.trim() };
              const next = [...chatMessages, userMessage];
              setChatMessages(next);
              setChatInput("");
              setChatLoading(true);
              setChatError("");
              try {
                const res = await fetch("/api/chat", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ messages: next, language }),
                });
                if (!res.ok) throw new Error("Response unavailable");
                const data = await res.json();
                const reply =
                  data.reply ||
                  data.message ||
                  (language === "fr"
                    ? "Je n'ai pas pu répondre pour le moment."
                    : "I couldn't answer right now.");
                setChatMessages((prev) => [...prev, { role: "assistant", content: reply }]);
              } catch (err) {
                setChatError(language === "fr" ? "Erreur de réponse, réessaie." : "Error fetching reply, try again.");
              } finally {
                setChatLoading(false);
              }
            }}
            loading={chatLoading}
            error={chatError}
            placeholder={language === "fr" ? "Pose ta question à Émilie..." : "Ask Emilie..."}
          />
        </div>
      );
    }

    if (active.type === "logos") {
      const logos = ["/images/A.png", "/images/B.png", "/images/C.png", "/images/D.png", "/images/E.png"];
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
      <div className="w-full bg-white border-b border-gray-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="marquee whitespace-nowrap text-sm text-gray-700 font-semibold">
            <span className="inline-block pr-8">{(language === "fr" ? phrasesFr : phrasesEn).join(" • ")}</span>
          </div>
        </div>
      </div>
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
          <div className="flex flex-col items-start gap-2 w-full lg:w-auto">
            <button
              onClick={() => setRemoteOpen((v) => !v)}
              className="lg:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-xs font-semibold text-black bg-white"
            >
              {language === "fr" ? (remoteOpen ? "Replier la télécommande" : "Ouvrir la télécommande") : remoteOpen ? "Hide remote" : "Show remote"}
            </button>

            <div
              className={`inline-flex flex-col gap-3 w-auto max-w-[200px] min-w-[140px] shrink-0 rounded-xl border border-gray-200 bg-white p-3 ${
                remoteOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="text-xs font-semibold text-gray-700">{current.remote}</div>
              {groups.map((group) => (
                <div key={group.title} className="space-y-1">
                  <button
                    onClick={() =>
                      setExpandedGroups((prev) => ({ ...prev, [group.title]: !prev[group.title] }))
                    }
                    className="flex w-full items-center justify-between text-sm font-semibold text-black"
                  >
                    <span className="tracking-wide">{group.title}</span>
                    <span className="text-gray-500">{expandedGroups[group.title] ? "–" : "+"}</span>
                  </button>
                  <div className={expandedGroups[group.title] ? "space-y-1" : "hidden"}>
                    {group.ids
                      .map((id) => sectionMap[id])
                      .filter(Boolean)
                      .map((section) => {
                        const isActive = active?.id === section.id;
                        return (
                          <button
                            key={section.id}
                            onClick={() => setActive(section)}
                            className={`w-full text-left px-2 py-1.5 rounded-lg border transition text-xs ${
                              isActive ? "bg-gray-100 text-black border-gray-400" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            <div className="text-xs font-semibold leading-tight text-gray-700">{section.label}</div>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white p-6 space-y-6 min-h-[320px]" style={{ color: "#000" }}>
            <div className="text-xs text-gray-600 uppercase tracking-wide">{language === "fr" ? "Écran" : "Screen"}</div>
            <div className="relative rounded-2xl border border-gray-200 bg-white min-h-[260px] flex items-center justify-center text-center px-6">
              <div className="w-full">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee {
          display: inline-block;
          min-width: 100%;
          animation: scroll-left 60s linear infinite;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function ChatBox({ messages, input, setInput, onSend, loading, error, placeholder }) {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 h-60 overflow-y-auto space-y-2">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg text-sm leading-relaxed ${
              m.role === "assistant" ? "bg-gray-200 text-black" : "bg-blue-100 text-black"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          className="flex-1 rounded-lg bg-white border border-gray-300 text-black px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={placeholder}
        />
        <button
          onClick={onSend}
          disabled={loading}
          className="px-3 py-2 rounded-lg bg-gray-200 text-black text-sm font-semibold border border-gray-300 hover:bg-gray-300 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
