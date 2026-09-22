import { BsFillLightningChargeFill } from 'react-icons/bs';
import { HiChartBar } from 'react-icons/hi2';
import { LuBrain } from 'react-icons/lu';
import type { IconType } from 'react-icons/lib';
import heroImg from '@/assets/images/HeroImg.png';

type CardId = 'elite-solutions' | 'real-impact' | 'smart-tech';
type CardTitle = 'Elite Solutions' | 'Real Impact' | 'Smart Tech';

interface FeatureCard {
  id: CardId;
  title: CardTitle;
  description: string;
  icon: IconType;
}

interface HeroImg {
  srcImg: string;
  altText: string;
}

interface HeroData {
  text: {
    title: {
      prefix: string;
      highlight: string;
      suffix: string;
    };
    description: string;
  };
  heroImg: HeroImg;
  ctaButton: {
    label: 'Get Started';
    href: '#contact';
  };
  cards: FeatureCard[];
}

export const heroData: HeroData = {
  text: {
    title: {
      prefix: 'Your Trusted IT ',
      highlight: 'Partner for Digital ',
      suffix: 'Success',
    },
    description:
      'We craft custom IT solutions that align with your goals, ensuring efficiency, security, and innovation',
  },
  ctaButton: {
    label: 'Get Started',
    href: '#contact',
  },
  heroImg: {
    srcImg: heroImg,
    altText: 'Hero Phone Display with Features',
  },
  cards: [
    {
      id: 'elite-solutions',
      title: 'Elite Solutions',
      description: 'Cutting-edge tech, flawless execution',
      icon: BsFillLightningChargeFill,
    },
    {
      id: 'real-impact',
      title: 'Real Impact',
      description: 'We turn ideas into measurable success',
      icon: HiChartBar,
    },
    {
      id: 'smart-tech',
      title: 'Smart Tech',
      description: 'Innovation that drives real growth.',
      icon: LuBrain,
    },
  ],
};
