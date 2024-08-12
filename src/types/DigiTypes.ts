export interface DigiItem {
    id: string;
    name: string;
    image: string;
    description: string;
  }

  export type DetailedDigiItem = {
    id: number;
    name: string;
    images: {
      href: string;
      transparent: boolean;
    }[];
    types: {
      id: number;
      type: string;
    }[];
    attributes: {
      id: number;
      attribute: string;
    }[];
    releaseDate: string;
    descriptions: {
      origin: string;
      language: string;
      description: string;
    }[];
    skills: {
      id: number;
      skill: string;
      translation: string;
      description: string;
    }[];
    priorEvolutions: {
      id: number;
      digimon: string;
      image: string;
    }[];
    nextEvolutions: {
      id: number;
      digimon: string;
      image: string;
    }[];
  };