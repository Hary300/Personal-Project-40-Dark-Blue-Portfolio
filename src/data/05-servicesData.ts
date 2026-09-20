import cloudIcon from '@/assets/icons/service/cloud.svg';
import codeScreenIcon from '@/assets/icons/service/codeScreen.svg';
import gitBranchIcon from '@/assets/icons/service/gitBranch.svg';
import headsetIcon from '@/assets/icons/service/headset.svg';
import monitorIcon from '@/assets/icons/service/monitor.svg';
import paintBrushIcon from '@/assets/icons/service/paintBrush.svg';
import shieldIcon from '@/assets/icons/service/shield.svg';
import smartphoneIcon from '@/assets/icons/service/smartphone.svg';
import sparklesIcon from '@/assets/icons/service/sparkles.svg';
import type { SectionHeader } from '@/types/SectionHeader';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesData {
  header: SectionHeader;
  services: ServiceItem[];
}

export const servicesData: ServicesData = {
  header: {
    title: 'Innovative IT Solutions for Your Business Growth',
    subtitle:
      'We provide tailored, high-performance technology solutions to streamline operations, enhance security, and drive success.',
  },
  services: [
    {
      id: 'web-development',
      title: 'Web Development',
      description:
        'We build fast, secure, and user-friendly websites to boost your online presence.',
      icon: monitorIcon,
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      description:
        'We create smooth, feature-rich mobile apps optimized for user experience.',
      icon: smartphoneIcon,
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description:
        'We craft beautiful and user-friendly interfaces to enhance customer experience.',
      icon: paintBrushIcon,
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description:
        'Optimize efficiency with flexible and cost-effective cloud solutions.',
      icon: cloudIcon,
    },
    {
      id: 'software-development',
      title: 'Software Development',
      description:
        'We develop innovative, scalable, and tailored software solutions.',
      icon: codeScreenIcon,
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description:
        'Improve system performance with DevOps, CI/CD, and optimized infrastructure.',
      icon: gitBranchIcon,
    },
    {
      id: 'cybersecurity-services',
      title: 'Cybersecurity Services',
      description:
        'We provide reliable security solutions to safeguard your data and systems.',
      icon: shieldIcon,
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description:
        'Leverage AI and big data to drive business growth and insights.',
      icon: sparklesIcon,
    },
    {
      id: 'it-consulting-support',
      title: 'IT Consulting & Support',
      description:
        'We help businesses optimize technology with strategic consulting and reliable support.',
      icon: headsetIcon,
    },
  ],
};
