import type { SectionHeader } from '@/types/SectionHeader';

interface ProcessAccordionItem {
  value: string;
  trigger: string;
  content: string;
}

interface HowWeWorkData {
  header: SectionHeader;
  items: ProcessAccordionItem[];
}

export const howWeWorkData: HowWeWorkData = {
  header: {
    title: 'How We Work',
    subtitle:
      'A structured process to bring your ideas to life—seamless, efficient, and tailored to your needs',
  },
  items: [
    {
      value: 'item-1',
      trigger: 'Discovery & Consultation',
      content:
        'We take the time to understand your business goals, challenges, and requirements to ensure the best-fit solution',
    },
    {
      value: 'item-2',
      trigger: 'Planning & Strategy',
      content:
        'We create a detailed roadmap, defining timelines, architecture, and technology stacks tailored to your project',
    },
    {
      value: 'item-3',
      trigger: 'Design & Prototyping',
      content:
        'Our design team crafts intuitive user interfaces and interactive prototypes for visual validation',
    },
    {
      value: 'item-4',
      trigger: 'Development & Implementation',
      content:
        'We write clean, scalable code and build robust backend systems using modern development standards',
    },
    {
      value: 'item-5',
      trigger: 'Testing & Optimization',
      content:
        'Rigorous quality assurance, performance tuning, and security audits ensure a bug-free experience',
    },
    {
      value: 'item-6',
      trigger: 'Launch & Support',
      content:
        'We handle seamless deployment and provide continuous post-launch support and maintenance',
    },
  ],
};
