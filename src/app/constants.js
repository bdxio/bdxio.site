import Moment from "moment";

export const Constants = {
  firebaseConfig: {
    apiKey: 'AIzaSyBaeo0bHhp71f4I5PlRnszmePDpZuHJqBo',
    authDomain: 'bdxio-website.firebaseapp.com',
    databaseURL: 'https://bdxio-website.firebaseio.com',
    projectId: 'bdxio-website',
    storageBucket: 'bdxio-website.appspot.com',
    messagingSenderId: '360638530775',
  },
  firebaseDataConfig: {
    year: '2018',
    collectionName: 'Array',
    documentConf: 'Config',
    collectionFAQ: 'FAQ',
    collections: ['Orgas', 'Speakers', 'Speakers17', 'Sponsors', 'News'],
  },
  eventDate: Moment("09-11-2018", "DD-MM-YYYY"),
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
      text:
        '"On the Web we all become small-town visitors lost in the big city."',
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
