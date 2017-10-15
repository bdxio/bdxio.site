import { ICFPPresentation } from '../../../models/int/ICFPPresentation';

export class ProgramOptions {

    public tracks: { [s: string]: { cssClass: string, label: string }; };
    public typeClasses: { [s: string]: string; };
    public mainRoomName: string;
    public roomSorter: (room1: string, room2: string) => number;
    public prezModifier: (prez: ICFPPresentation) => ICFPPresentation;

    public static BDXIO: ProgramOptions = {
        tracks: {
            'Internet of things & emerging markets': { cssClass: 'bdx-networks', label: 'Internet des objets & marchés émergents' },
            'Internet des objets & marchés émergents': { cssClass: 'bdx-networks', label: 'Internet des objets & marchés émergents' },
            'Tooling': { cssClass: 'bdx-tools', label: 'Tooling' },
            'Frontend Web, Mobile & Video games': { cssClass: 'bdx-phone', label: 'Frontend Web, Mobile & Jeux vidéos' },
            'Frontend Web, Mobile & Jeux vidéos': { cssClass: 'bdx-phone', label: 'Frontend Web, Mobile & Jeux vidéos' },
            'Design, UI & UX': { cssClass: 'bdx-design', label: 'Design, UI & UX' },
            'Conception, Architecture & Dev practices': { cssClass: 'bdx-settings', label: 'Conception, Architecture & Pratiques de dev' },
            'Conception, Architecture & Pratiques de dev': {
                cssClass: 'bdx-settings',
                label: 'Conception, Architecture & Pratiques de dev'
            },
            'Backends, Cloud & Big Data': { cssClass: 'bdx-server', label: 'Backends, Cloud & Big Data' }
        },
        mainRoomName: 'Hall',
        typeClasses: {
            'Conference': 'cat-4',
            'Lightning talk': 'cat-3',
            'Keynote': 'cat-2',
            'Hand\'s on Labs': 'cat-1'
        },
        roomSorter: (room1: string, room2: string) => {
            if (room1 === 'Hall') {
                return -1;
            } else if (room1 === 'Grand Amphi') {
                return -1;
            } else {
                return room1 > room2 ? 1 : -1;
            }
        },
        prezModifier: (prez: ICFPPresentation) => {
            prez.isLunch = prez.title && prez.title === 'Pause déjeuner';
            if (prez.isLunch) prez.isBreak = false;
            if (prez.type === 'Keynote') prez.track = null;
            return prez;
        }
    };
}