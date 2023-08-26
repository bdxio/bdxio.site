import type { Speaker } from "@bdxio/bdxio.types";

function getSocialUrl(
  link: string,
  social:
    | Speaker["twitter"]
    | Speaker["github"]
    | Speaker["website"]
    | Speaker["linkedin"],
) {
  if (link.startsWith("http")) {
    return link;
  }
  return `https://${social}.com/${link.replace("@", "")}`;
}

export default function getSpeakerSocialsLinks(speaker: Speaker) {
  const socials = [];
  if (speaker.twitter) {
    socials.push({
      label: "twitter",
      imgPath: "icons/twitter.svg",
      alt: "Icône Twitter",
      url: getSocialUrl(speaker.twitter, "twitter"),
    });
  }
  if (speaker.github) {
    socials.push({
      label: "github",
      imgPath: "icons/github.svg",
      alt: "Icône Github",
      url: getSocialUrl(speaker.github, "github"),
    });
  }
  if (speaker.linkedin) {
    socials.push({
      label: "linkedin",
      imgPath: "icons/linkedin.svg",
      alt: "Icône Linkedin",
      url: getSocialUrl(speaker.linkedin, "linkedin"),
    });
  }
  if (speaker.website) {
    socials.push({
      label: "site",
      imgPath: "icons/website.svg",
      alt: "Icône site personnel",
      url: speaker.website,
    });
  }

  return socials;
}
