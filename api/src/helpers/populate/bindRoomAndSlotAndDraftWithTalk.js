const extraData = [
  {
    conferenceHallId: "07HCiIEFp8sOiuAwhrrO",
    title: "Introduction aux Design Tokens",
    room: "Salle2",
    slot: "Quickie - début 13h15",
  },
  {
    conferenceHallId: "1T84P5Bn4B7rEy8gGWT3",
    title:
      "Cryptanalyse de la machine Enigma : entre espionnage et mathématiques",
    room: "Salle2",
    slot: "Conférence - début 15h10",
  },
  {
    conferenceHallId: "2r5YrFDbjwokeA27e43O",
    title: "Property-based Testing ou l'insuffisance des tests unitaires",
    room: "Salle2",
    slot: "Conférence - début 16h25",
  },
  {
    conferenceHallId: "3VtJMCT7CMG3bOSbQgup",
    title: "Comment j'ai aidé ma fille à lire avec le machine learning",
    room: "AmphiB",
    slot: "Conférence - début 15h10",
  },
  {
    conferenceHallId: "3YOEr3e2pu9hVkFthEEi",
    title: "Contribuer à l'Open Source ? Yes, you can!",
    room: "AmphiA",
    slot: "Quickie - début 13h40",
  },
  {
    conferenceHallId: "8vtRRpAlP0JiABCssvba",
    title: "Les sciences cognitives au service de l’accessibilité web.",
    room: "AmphiA",
    slot: "Conférence - début 14h15",
  },
  {
    conferenceHallId: "9KPttA5Yz4Kja4D31LyT",
    title:
      "Gestion de la dette d'architecture dans un contexte d'hypercroissance",
    room: "AmphiB",
    slot: "Conférence - début 11h05",
  },
  {
    conferenceHallId: "9oBxryAWpLc57MeT0uap",
    title: "Still not into State Machines in 2023?!",
    room: "Salle2",
    slot: "Conférence - début 10h10",
  },
  {
    conferenceHallId: "9wFNALfdvhK6kHa6Ww5d",
    title: " Le réseau de neurones qui écrivait des romans",
    room: "Lab",
    slot: "Atelier - début 10h10",
  },
  {
    conferenceHallId: "BIJWr2GohtEHciNmLBN4",
    title: "Comment débuter dans l'accessibilité numérique ?",
    room: "Salle1",
    slot: "Conférence - début 16h25",
  },
  {
    conferenceHallId: "CMsrtEoVDDJ1iOowyyC6",
    title: "Syndrome de l'Imposteur, l'arbre qui cache la forêt",
    room: "Salle1",
    slot: "Conférence - début 15h10",
  },
  {
    conferenceHallId: "CXUyeEWX2yI3UZWFITf9",
    title:
      "Comment je suis devenue Data Scientiste en revenant d’un tour du monde ?",
    room: "AmphiB",
    slot: "Quickie - début 12h00",
  },
  {
    conferenceHallId: "Cy9HzyFU5haqyqFlFbyR",
    title: "Record du monde - Tour d’horizon et cas d’utilisation des records",
    room: "Salle1",
    slot: "Quickie - début 12h00",
  },
  {
    conferenceHallId: "EurzG9orDi3cXzEorCcE",
    title:
      "Drogué à l'hexagone,  Node JS ne m'a pas  vraiment aidé à rester clean ... Mais NestJS pourrait-il me sauver ?",
    room: "Salle1",
    slot: "Conférence - début 10h10",
  },
  {
    conferenceHallId: "KH8n6TljHr22qxvzw2Hv",
    title: "A la découverte d'Accelerate",
    room: "Lab",
    slot: "Atelier - début 13h15",
  },
  {
    conferenceHallId: "KtB6g5xaz5TNNL62Nzxy",
    title: "Pour réussir, elles aussi sont sorties de leur zone de confort",
    room: "AmphiA",
    slot: "Quickie - début 13h15",
  },
  {
    conferenceHallId: "LIr5Oyea4w0HJ35OI9qo",
    title: "Introduction au DevSecOps",
    room: "AmphiB",
    slot: "Quickie - début 13h15",
  },
  {
    conferenceHallId: "LMrlDuY9I392AWErEVU8",
    title: "Et s'il suffisait de documenter pour tester ?",
    room: "AmphiA",
    slot: "Conférence - début 15h10",
  },
  {
    conferenceHallId: "LeoHHE5PlMU0DbDG8CAH",
    title:
      "Comment inclure l’inclusivité dès les premières étapes de conception d’un service ou d’un produit digital ?",
    room: "AmphiA",
    slot: "Quickie - début 12h00",
  },
  {
    conferenceHallId: "PIuGL3d6bcP5TwNWmpcK",
    title: "De pionnières à “oubliées”, l’histoire des femmes dans la tech.",
    room: "AmphiA",
    slot: "Conférence - début 11h05",
  },
  {
    conferenceHallId: "QL23LjbKcwLMnCVGYAn8",
    title:
      "DALL-E V2 - un robot et un peintre font de la génération d'image par IA ",
    room: "AmphiA",
    slot: "Conférence - début 16h25",
  },
  {
    conferenceHallId: "VpXZL5wztOlz9mJqdVgo",
    title: "Test me up, before you Go-Go",
    room: "Salle1",
    slot: "Quickie - début 13h15",
  },
  {
    conferenceHallId: "WlqKdJgNPfJ8SU994bjW",
    title: "Les proxies ES pour le fun et la gloire",
    room: "Salle1",
    slot: "Conférence - début 11h05",
  },
  {
    conferenceHallId: "XJywtdHmXPYq1djfFyj8",
    title: "Remix : le framework vraiment full stack",
    room: "AmphiB",
    slot: "Conférence - début 14h15",
  },
  {
    conferenceHallId: "cmU3W5AvW8ZcXHUMNE4W",
    title: "Comment économiser de l'argent et donc du CO2 avec Azure",
    room: "AmphiC",
    slot: "Quickie - début 13h40",
  },
  {
    conferenceHallId: "dsNiCqoQI0eBFFQZq3RR",
    title:
      "Comment permettre 100 millions de logins sans interruption de service ? Betclic raconte son Euro 2020 de football",
    room: "Salle1",
    slot: "Conférence - début 14h15",
  },
  {
    conferenceHallId: "eICyzstVSNoiar0zhaGf",
    title:
      "Surveiller ses impressions 3D avec un vieux smartphone, du WebRTC, des WebSockets et du Serverless",
    room: "Salle2",
    slot: "Conférence - début 11h05",
  },
  {
    conferenceHallId: "gFCTTZXzkqW6pPwrLbW3",
    title: "Deep Learning en Python : comment choisir un framework ?",
    room: "AmphiA",
    slot: "Conférence - début 10h10",
  },
  {
    conferenceHallId: "jUq29Vho3wmnSVf32bEM",
    title:
      "Testing things that don't want to be tested: A game streaming story",
    room: "AmphiC",
    slot: "Quickie - début 12h00",
  },
  {
    conferenceHallId: "k5npc3h1IYT3RshhoYCM",
    title:
      "Améliorer sa performance web grâce aux stratégies d’hydratation React",
    room: "Salle2",
    slot: "Quickie - début 12h00",
  },
  {
    conferenceHallId: "llbKC3auhiqCtA5dt0Aa",
    title: "Abstraire mon architecture distribuée ? Pourquoi et Comment ?",
    room: "Salle2",
    slot: "Conférence - début 14h15",
  },
  {
    conferenceHallId: "lvbN1eLhvWezVSmIZzUZ",
    title: "Sustainable by design",
    room: "AmphiC",
    slot: "Conférence - début 10h10",
  },
  {
    conferenceHallId: "mnNeefOAmqyKHdfbZSQW",
    title: "Mon application en Serverless",
    room: "AmphiC",
    slot: "Conférence - début 14h15",
  },
  {
    conferenceHallId: "oFnlknRJzIPU2A6G0sJS",
    title: "1, 2, 3 ce sera toi le Scrum Master !",
    room: "Salle1",
    slot: "Quickie - début 13h40",
  },
  {
    conferenceHallId: "r8KuKXW6MjW4UCn1nEJy",
    title: "Rendez les états impossibles inatteignables dans vos frontends",
    backup: true,
  },
  {
    conferenceHallId: "s5oHhEr4oaQI99zqvTp5",
    title: "La recommandation de contenu à portée de mains !",
    room: "Salle2",
    slot: "Quickie - début 13h40",
  },
  {
    conferenceHallId: "uNrsGlILATdTmOV8BZf5",
    title: "Y’en a marre du software craftsmanship",
    room: "AmphiC",
    slot: "Conférence - début 16h25",
  },
  {
    conferenceHallId: "uWemzuRGdgKRucycJQH5",
    title: "Svelte, ou pourquoi je ne veux plus faire de React",
    room: "AmphiC",
    slot: "Conférence - début 15h10",
  },
  {
    conferenceHallId: "w96GMrchHy0os6sN5LRD",
    title: "Le numérique c’est pour tout le monde… ou pas !",
    room: "AmphiB",
    slot: "Conférence - début 16h25",
  },
  {
    conferenceHallId: "wiTZQ1fJMiwHMCdSkxNI",
    title: "Alice au pays d'Opentelemetry",
    room: "AmphiC",
    slot: "Conférence - début 11h05",
  },
  {
    conferenceHallId: "wuCf6JUCrZlHfjHZdKbQ",
    title: "Codez votre première IA de jeu vidéo !",
    room: "Lab",
    slot: "Atelier - début 15h10",
  },
  {
    conferenceHallId: "xn3qqza23MlFWfQGGDd1",
    title: "Quelle est la place des introvertis dans une équipe agile ?",
    room: "AmphiB",
    slot: "Conférence - début 10h10",
  },
  {
    conferenceHallId: "ybMWdBADMFtjCD04HaUx",
    title: "Indépendant ou Inde-dépendant",
    room: "AmphiC",
    slot: "Quickie - début 13h15",
  },
];

module.exports.bindRoomAndSlotAndDraftWithTalk = (conferenceHallId) => {
  const bind = extraData.find(
    (data) => data.conferenceHallId === conferenceHallId
  );

  if (!bind) {
    return {
      room: null,
      slot: null,
      backup: false,
    };
  }

  return {
    room: bind.room || null,
    slot: bind.slot || null,
    backup: bind.backup || false,
  };
};
