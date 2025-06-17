export interface Disease {
  id: string;
  name: string;
  category: string;
  bodySystem: string;
  summary: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  prevention: string[];
  simpleExplanation: {
    whatIs: string;
    howYouGet: string;
    howToFeel: string;
    howToGetBetter: string;
  };
  severity: 'mild' | 'moderate' | 'severe';
  commonness: 'rare' | 'uncommon' | 'common' | 'very-common';
}

export interface BodySystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  diseases: string[];
}