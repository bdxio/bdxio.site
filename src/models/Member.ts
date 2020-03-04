export interface Member {
  id: string;
  firstname: string;
  lastname: string;
  onBoard: boolean;
  bio: string;
  company: string;
  avatar: Avatar;
  contact: Contact;
}

export interface Avatar {
  primary: string;
  hover: string;
}

export interface Contact {
  email: string;
  twitter: string;
  linkedin: string;
  website: string;
}
