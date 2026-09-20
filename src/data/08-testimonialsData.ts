import type { SectionHeader } from '@/types/SectionHeader';

interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

interface TestimonialsSectionData {
  header: SectionHeader;
  testimonials: TestimonialItem[];
}

export const testimonialsData: TestimonialsSectionData = {
  header: {
    title: 'What Our Clients Say',
    subtitle:
      'Real stories from businesses that have transformed with our IT solutions.',
  },
  testimonials: [
    {
      id: 'testi-1',
      rating: 5,
      quote:
        'Working with Syntax has been a game-changer for our business. Their IT solutions streamlined our operations and helped us scale faster than we expected. Highly recommended!',
      author: {
        name: 'Michael Anderson',
        role: 'CEO of FinTech Solutions',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      },
    },
    {
      id: 'testi-2',
      rating: 5,
      quote:
        'The UI/UX design provided by Syntax completely transformed our platform. Our users love the new interface, and engagement rates have significantly increased.',
      author: {
        name: 'Sarah Thompson',
        role: 'Head of Product at E-Hub',
        avatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
      },
    },
    {
      id: 'testi-3',
      rating: 5,
      quote:
        'Cybersecurity was a major concern for us, but Syntax delivered a secure and scalable solution that gave us peace of mind. Their team is truly professional and reliable.',
      author: {
        name: 'David Collins',
        role: 'CTO of MedTech Innovations',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
      },
    },
    {
      id: 'testi-4',
      rating: 5,
      quote:
        "The cloud migration handled by Syntax was flawless. Zero downtime and a massive boost in system performance. We couldn't be happier with the outcome.",
      author: {
        name: 'Emily Rodriguez',
        role: 'VP of Engineering at CloudScale',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
      },
    },
    {
      id: 'testi-5',
      rating: 5,
      quote:
        'Syntax built an AI-driven analytics dashboard that gave us clear insights into customer behavior. Their technical expertise is top-notch!',
      author: {
        name: 'James Wilson',
        role: 'Founder of DataPulse',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
      },
    },
    {
      id: 'testi-6',
      rating: 5,
      quote:
        'From discovery to final deployment, the communication was seamless. They delivered our mobile app ahead of schedule without sacrificing quality.',
      author: {
        name: 'Jessica Taylor',
        role: 'Operations Director at Retailify',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250',
      },
    },
  ],
};
