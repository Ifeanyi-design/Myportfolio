import type {
  ExperienceEntry,
  LeadershipEntry,
  TimelineMilestone,
} from '../types';

/**
 * Professional experience.
 *
 * ACCURACY RULE: no duty, metric, client name or technology is listed here
 * unless it is backed by shipped work. Update the wording whenever engagement
 * details change or new client work lands.
 */
export const experience: readonly ExperienceEntry[] = [
  {
    id: 'independent',
    organisation: 'Independent Engineering',
    role: 'Software Engineer — Client & Contract Work',
    period: 'Ongoing',
    type: 'Client & Contract Work',
    summary:
      'Independent engineering delivering web platforms, backend services and AI systems end to end — from database design and APIs through to deployment and handover.',
    points: [
      'Delivered a multi-division corporate portal for a printing and digital ID company, including consultation and quote workflows with background task processing.',
      'Built and shipped a streaming platform with automated content publishing and CDN delivery.',
      'Designed an AI-native marketplace with conversational triage, contractor dispatch and escrow payment flows.',
      'Built Atlas, an MCP server that gives coding agents persistent engineering memory.',
    ],
    stack: ['Python', 'Flask', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript'],
  },
];

/**
 * Team / leadership work. Titles are only used where they are actually
 * established — Community Innovation Core has no role attached on purpose.
 */
export const leadership: readonly LeadershipEntry[] = [
  {
    id: 'team-devions',
    organisation: 'Team Devions',
    role: 'Admin / Technical Contributor',
    period: 'Ongoing',
    summary:
      'A technology and product-building team. I help run the team and contribute to its engineering work — collaborative builds, hackathon entries and project experimentation, not just discussion.',
    themes: [
      'Collaborative product development',
      'AI and software projects',
      'Hackathon participation',
      'Technical problem solving',
      'Team collaboration',
    ],
  },
  {
    id: 'community-innovation-core',
    organisation: 'Community Innovation Core',
    period: 'Ongoing',
    summary:
      'Part of a technology-focused community, taking part in its initiatives and collaborative work.',
    themes: ['Technology community', 'Collaboration'],
  },
];

/**
 * Compact career progression. Periods are only as specific as the source
 * information allows — no invented dates.
 */
export const timeline: readonly TimelineMilestone[] = [
  {
    period: 'Ongoing',
    title: 'Independent engineering & client work',
    detail: 'Web platforms, APIs and AI systems delivered end to end.',
  },
  {
    period: 'Ongoing',
    title: 'Team Devions',
    detail: 'Admin and technical contributor on collaborative product builds.',
  },
  {
    period: '2026',
    title: '1st Place — IESA Forge the Future Hackathon',
    detail: 'IntelliCT, a computer vision system for intelligent transportation, built with the team.',
  },
  {
    period: '2026',
    title: 'Top 15 in Africa — AFRETEC Inclusive Education Challenge',
    detail: 'PadeeSpace, an inclusive education platform developed with the team.',
  },
  {
    period: 'Ongoing',
    title: 'AI, backend and full-stack project work',
    detail: 'Products across APIs, agents and computer vision.',
  },
];
