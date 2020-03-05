export interface Member {
  id: string;
  displayName: string;
  bio: string;
  company: string;
  avatar: Avatar;
  contact: Contact | null;
  isSpeaker: boolean;
}

export interface Avatar {
  primary: string;
  hover: string | null;
}

export interface Contact {
  email: string;
  twitter: string | null;
  linkedin: string | null;
  website: string | null;
}
