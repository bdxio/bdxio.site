import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
export class ProgramOptions {

    public trackClasses:{ [s: string]: string; };
    public typeClasses:{ [s: string]: string; };
    public mainRoomName:string;
    public i18n:{ [s: string]: string; };
    public roomSorter:(room1: string, room2: string) => number;
    public prezModifier:(prez:ICFPPresentation) => ICFPPresentation;

    public static BDXIO:ProgramOptions = {
        trackClasses: {
            //'Java, JVM, Javas SE/EE': 'bdx-design',
            //'Java, JVM, Javas SE/EE': 'bdx-server',
            //'Java, JVM, Javas SE/EE': 'bdx-phone',
            //'Java, JVM, Javas SE/EE': 'bdx-tools',
            //'Java, JVM, Javas SE/EE': 'bdx-networks',
            //'Java, JVM, Javas SE/EE': 'bdx-settings',
            'Internet of things & emerging markets': 'bdx-networks',
            'Tooling': 'bdx-tools',
            'Frontend Web, Mobile & Video games': 'bdx-phone',
            'Design, UI & UX': 'bdx-design',
            'Conception, Architecture & Dev practices': 'bdx-settings',
            'Backends, Cloud & Big Data': 'bdx-server'
        },
        mainRoomName: 'Hall',
        typeClasses: {
            'Conference': 'cat-4',
            'Lightning talk': 'cat-3',
            'Keynote': 'cat-2',
            'Hand\'s on Labs': 'cat-1'
        },
        i18n: {
            'Internet of things & emerging markets': 'Internet des objets & marchés émergents',
            'Frontend Web, Mobile & Video games': 'Frontend Web, Mobile & Jeux vidéos',
            'Conception, Architecture & Dev practices': 'Conception, Architecture & Pratiques de dev'
        },
        roomSorter: (room1:string, room2:string) => {
            if (room1 === 'Hall') {
                return -1;
            } else if (room1 === 'Grand Amphi') {
                return -1;
            } else {
                return room1 > room2 ? 1 : -1;
            }
        },
        prezModifier: (prez:ICFPPresentation) => {
            prez.isLunch = prez.title && prez.title === 'Pause déjeuner';
            if (prez.isLunch) prez.isBreak = false;
            if (prez.type === 'Keynote') prez.track = null;
            return prez;
        }
    };
}