import aboutTeamImg from '@/assets/images/aboutTeam.webp';
import type { SectionHeader } from '@/types/SectionHeader';

interface StatItem {
  id: string;
  value: string;
  label: string;
}

interface AboutSectionData {
  header: SectionHeader;
  description: string;
  image: {
    srcImg: string;
    altText: string;
  };
  stats: StatItem[];
}

export const aboutData: AboutSectionData = {
  header: {
    title: 'Proven Results, Measurable Impact',
  },
  description:
    'We are a team of tech enthusiasts dedicated to building innovative and scalable IT solutions. From software development to cloud integration, we help businesses thrive in the digital era.',
  image: {
    srcImg: aboutTeamImg,
    altText: 'Team of tech enthusiasts working in an office',
  },
  stats: [
    {
      id: 'happy-customer',
      value: '50+',
      label: 'Happy Customer',
    },
    {
      id: 'project-delivered',
      value: '100+',
      label: 'Project Delivered',
    },
    {
      id: 'customer-satisfaction',
      value: '98%',
      label: 'Customer Satisfaction',
    },
  ],
};
