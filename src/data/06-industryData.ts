import financeImg from '@/assets/images/industry/finance.webp';
import healthcareImg from '@/assets/images/industry/healthcare.webp';
import ecommerceImg from '@/assets/images/industry/ecommerce.webp';
import type { SectionHeader } from '@/types/SectionHeader';

interface IndustryTabItem {
  id: string;
  trigger: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  srcImg: string;
  altText: string;
}

interface IndustrySectionData {
  header: SectionHeader;
  tabs: IndustryTabItem[];
}

export const industryData: IndustrySectionData = {
  header: {
    title: 'Tailored IT Solutions for Every Industry',
    subtitle:
      'From finance to healthcare and retail, we provide cutting-edge technology solutions to drive efficiency, security, and growth in your industry',
  },
  tabs: [
    {
      id: 'finance-fintech',
      trigger: 'Finance & FinTech',
      title: 'Secure & Scalable Financial Solutions',
      description:
        'We help financial institutions with secure, data-driven, and compliant technology solutions to enhance transactions and customer experiences',
      buttonText: 'Detail',
      href: '#finance',
      srcImg: financeImg,
      altText: 'Credit card and payment terminal',
    },
    {
      id: 'healthcare',
      trigger: 'Healthcare',
      title: 'Innovative Tech for Better Healthcare',
      description:
        'We build HIPAA-compliant, AI-powered healthcare solutions for better patient care, data management, and operational efficiency',
      buttonText: 'Detail',
      href: '#healthcare',
      srcImg: healthcareImg,
      altText: 'Stethoscope on light blue background',
    },
    {
      id: 'e-commerce',
      trigger: 'E-commerce',
      title: 'Seamless Shopping & Smart Retail Tech',
      description:
        'Enhance customer experience and streamline operations with AI-powered e-commerce platforms, smart inventory systems, and payment solutions',
      buttonText: 'Detail',
      href: '#ecommerce',
      srcImg: ecommerceImg,
      altText: 'Mini shopping cart next to a laptop',
    },
  ],
};
