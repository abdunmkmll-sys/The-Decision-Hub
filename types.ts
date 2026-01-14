
export type Language = 'en' | 'ar';

export interface DecisionOption {
  id: string;
  label: string;
  description: string;
  nextStep?: string; // ID of the next node or "final"
  result?: string;   // Text to show if it's an end node
}

export interface DecisionNode {
  id: string;
  question: string;
  options: DecisionOption[];
}

export interface Persona {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  steps: DecisionNode[];
}

export interface UnwrittenRule {
  id: number;
  title: string;
  category: 'work' | 'money' | 'relationships' | 'growth';
  explanation: string;
  examples: string[];
}

export interface ContentData {
  navigation: {
    home: string;
    decisionMaps: string;
    lifeSimulation: string;
    unwrittenRules: string;
    about: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    cta: string;
    cards: {
      decisionMaps: { title: string; desc: string };
      lifeSimulation: { title: string; desc: string };
      unwrittenRules: { title: string; desc: string };
    };
  };
  about: {
    title: string;
    philosophyTitle: string;
    philosophyBody: string;
    visionTitle: string;
    visionBody: string;
  };
  decisionMaps: {
    title: string;
    subtitle: string;
    trees: {
      careers: DecisionNode[];
      education: DecisionNode[];
      personal: DecisionNode[];
    };
  };
  lifeSimulation: {
    title: string;
    subtitle: string;
    personas: Persona[];
  };
  unwrittenRules: {
    title: string;
    subtitle: string;
    rules: UnwrittenRule[];
  };
}
