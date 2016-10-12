export class ProgramOptions {

    public trackClasses:{ [s: string]: string; };
    public typeClasses:{ [s: string]: string; };

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
        typeClasses: {
            'Conference': 'cat-4',
            'Lightning talk': 'cat-3',
            'Keynote': 'cat-2',
            'Hand\'s on Labs': 'cat-1'
        }
    };
}