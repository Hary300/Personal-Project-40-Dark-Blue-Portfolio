import logo from '@/assets/icons/logo.svg';
export type NavId = 'about' | 'service' | 'projects' | 'testimonials' | 'faq';
type NavLabel = 'About' | 'Service' | 'Projects' | 'Testimonials' | 'FAQ';
type NavHref = '#about' | '#service' | '#projects' | '#testimonials' | '#faq';

interface NavItem {
  id: NavId;
  label: NavLabel;
  href: NavHref;
}

interface CtaButton {
  id: string;
  label: string;
  href: '#contact';
}

interface Logo {
  text: string;
  href: '#home';
  alt: string;
  src: string;
}

interface HeaderData {
  logo: Logo;
  navLinks: NavItem[];
  ctaButton: CtaButton;
}

export const headerData: HeaderData = {
  logo: {
    text: 'Your Logo',
    href: '#home',
    alt: 'Your Logo Icon',
    src: logo,
  },
  navLinks: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'service', label: 'Service', href: '#service' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ],
  ctaButton: {
    id: 'get-started',
    label: 'Get Started',
    href: '#contact',
  },
};
