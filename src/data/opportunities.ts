import type { OpportunityKind } from '../types';

/**
 * "What I'm looking for" — a statement of availability, not a list of demands.
 * The closing line in the component makes clear nothing here is exclusive.
 */
export const opportunities: readonly OpportunityKind[] = [
  {
    label: 'Software Engineering Roles',
    desc: 'Product teams building and maintaining real software.',
  },
  {
    label: 'Backend Engineering Roles',
    desc: 'APIs, services, data modelling and infrastructure.',
  },
  {
    label: 'AI / ML Engineering Roles',
    desc: 'Applied machine learning and intelligent systems.',
  },
  {
    label: 'AI Engineering Roles',
    desc: 'LLM applications, agents, RAG and tool-calling systems.',
  },
  {
    label: 'Computer Vision Work',
    desc: 'Detection, recognition and image-based systems.',
  },
  {
    label: 'Full-Stack Engineering Roles',
    desc: 'React and TypeScript on the front, Python APIs behind.',
  },
  {
    label: 'Contract & Freelance Projects',
    desc: 'Business websites, web applications and automation delivered end to end.',
  },
];
