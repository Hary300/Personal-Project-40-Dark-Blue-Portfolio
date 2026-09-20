import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';

interface SocialItem {
  id: string;
  platform: string;
  href: string;
  icon: IconType;
}

interface FooterData {
  logo: {
    text: string;
    srcImg?: string;
    altText: string;
  };
  copyright: string;
  socials: SocialItem[];
}

export const footerData: FooterData = {
  logo: {
    text: 'Your Logo',
    altText: 'Your Logo Icon',
  },
  copyright:
    'Another masterpiece by Hary, trained at WebProgrammingHack bootcamp',
  socials: [
    {
      id: 'facebook',
      platform: 'facebook',
      href: 'https://facebook.com',
      icon: FaFacebookF,
    },
    {
      id: 'instagram',
      platform: 'instagram',
      href: 'https://instagram.com',
      icon: FaInstagram,
    },
    {
      id: 'linkedin',
      platform: 'linkedin',
      href: 'https://linkedin.com',
      icon: FaLinkedinIn,
    },
    {
      id: 'tiktok',
      platform: 'tiktok',
      href: 'https://tiktok.com',
      icon: FaTiktok,
    },
  ],
};
