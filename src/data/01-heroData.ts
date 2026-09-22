import { BsFillLightningChargeFill } from 'react-icons/bs';
import { HiChartBar } from 'react-icons/hi2';
import { RiBrainFill } from 'react-icons/ri';
import type { IconType } from 'react-icons/lib';
import heroImg from '@/assets/images/HeroImg.png';

type CardId = 'elite-solutions' | 'real-impact' | 'smart-tech';
type CardTitle = 'Elite Solutions' | 'Real Impact' | 'Smart Tech';

interface FeatureCard {
  id: CardId;
  title: CardTitle;
  description: string;
  position: string;
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
      position: 'top-[10%] right-1/2 -translate-x-[6.25%]',
      icon: BsFillLightningChargeFill,
    },
    {
      id: 'real-impact',
      title: 'Real Impact',
      description: 'We turn ideas into measurable success',
      position: 'top-[50%] right-1/2 -translate-x-[48%]',
      icon: HiChartBar,
    },
    {
      id: 'smart-tech',
      title: 'Smart Tech',
      description: 'Innovation that drives real growth.',
      position: 'top-[44%] left-1/2 translate-x-[37.5%]',
      icon: RiBrainFill,
    },
  ],
};
