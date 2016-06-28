declare function require(string: string): string;

declare var scrollReveal: scrollreveal.IScrollReveal;
declare module scrollreveal {
    interface IScrollReveal {
        new(): ScrollRevealInst
    }
    interface ScrollRevealInst {
    }
}
