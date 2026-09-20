import type { SectionHeader } from '@/types/SectionHeader';

interface FaqItem {
  value: string;
  trigger: string;
  content: string;
}

interface FaqSectionData {
  header: SectionHeader;
  faqs: FaqItem[];
}

export const faqData: FaqSectionData = {
  header: {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "We've compiled answers to the most common questions to help you understand our services better",
  },
  faqs: [
    {
      value: 'item-1',
      trigger: 'What services do you offer?',
      content:
        "We provide end-to-end IT solutions, including web & mobile app development, cloud solutions, cybersecurity, AI & data analytics, and IT consulting. Whether you need a custom-built platform or infrastructure optimization, we've got you covered.",
    },
    {
      value: 'item-2',
      trigger: 'How do you ensure the quality of your solutions?',
      content:
        'We follow strict quality assurance processes, automated testing, and code review standards to deliver robust, secure, and high-performing software.',
    },
    {
      value: 'item-3',
      trigger: 'How long does it take to complete a project?',
      content:
        'Project timelines depend on the scope and complexity of the requirements. Typically, small to medium projects take between 4 to 12 weeks from discovery to deployment.',
    },
    {
      value: 'item-4',
      trigger: 'What industries do you serve?',
      content:
        'We work across various industries, including Finance & FinTech, Healthcare, E-commerce, Retail, Logistics, and Enterprise IT.',
    },
    {
      value: 'item-5',
      trigger: 'How can we start working together?',
      content:
        "You can reach out via our contact form or click the 'Get Started' button. Our team will schedule an initial discovery call to discuss your goals and requirements.",
    },
  ],
};
