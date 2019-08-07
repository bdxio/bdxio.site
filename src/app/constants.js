import Moment from "moment";

export const Constants = {
  gSheets: {
    published_data: "1oP2RTGNZWJtDTLYDSGhAIlAjRDSblb9-v7Yz40OymXU",
    FAQ: "1zrAgzdSM4XHutJJuHWaOKHNZOeO4L_mKcQ9HHnPyYak"
  },
  eventDate: Moment("15-11-2019T09:00:00", "DD-MM-YYYYTHH:mm:ss"),
  endOfLive: Moment("15-11-2019T18:30:00", "DD-MM-YYYYTHH:mm:ss"),
  quotes: [
    {
      text:
        '"Each of us is a unique strand in the intricate web of life and here to make a contribution."',
      author: "Deepak Chopra"
    },
    {
      text:
        '"Le fossé séparant théorie et pratique est moins large en théorie qu’il ne l’est en pratique."',
      author: ""
    },
    {
      text:
        '"The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."',
      author: "Tim Berners-Lee"
    },
    {
      text: '"On the Web we all become small-town visitors lost in the big city."',
      author: "Alison Gopnik"
    },
    {
      text:
        '"Everyday life is like programming, I guess. If you love something you can put beauty into it."',
      author: "Donald Knuth"
    }
  ],
  sponsors: {
    types: {
      BALTHAZAR: "BALTHAZAR",
      IMPERIAL: "IMPERIAL",
      MAGNUM: "MAGNUM",
      CHOPINE: "CHOPINE"
    }
  },
  talkType: {
    CONF: "Conférence",
    LT: "Lightning talk",
    LAB: "Hands on Lab"
  },
  tracks: {
    DESIGN: "Design, UI & UX",
    ARCH: "Conception, Architecture & Pratiques de dev",
    IOT: "Internet des objets & marchés émergents",
    TOOLING: "Tooling",
    FRONTEND: "Frontend Web, Mobile & Jeux vidéos",
    BACKEND: "Backends, Cloud & Big Data"
  }
};
