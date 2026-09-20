import type { SectionHeader } from '@/types/SectionHeader';

type FieldLabel = 'Name' | 'Email' | 'Message';
type FieldName = 'name' | 'email' | 'message';
type FieldType = 'text' | 'email' | 'textarea';

interface FormInputItem {
  id: string;
  label: FieldLabel;
  name: FieldName;
  type: FieldType;
  placeholder: string;
}

interface ServiceOptionItem {
  id: string;
  label: string;
  value: string;
}

interface ContactSectionData {
  header: SectionHeader;
  inputs: FormInputItem[];
  servicesLabel: string;
  services: ServiceOptionItem[];
  submitButtonText: string;
}

export const contactData: ContactSectionData = {
  header: {
    title: 'Let’s Build Something Great Together',
    subtitle:
      'Have a project in mind? Fill out the form below, and our team will get back to you shortly',
  },
  inputs: [
    {
      id: 'name',
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'Input your name',
    },
    {
      id: 'email',
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Input your email',
    },
    {
      id: 'message',
      label: 'Message',
      name: 'message',
      type: 'textarea',
      placeholder: 'Input your message',
    },
  ],
  servicesLabel: 'Service',
  services: [
    {
      id: 'web-development',
      label: 'Web Development',
      value: 'web-development',
    },
    {
      id: 'cloud-solutions',
      label: 'Cloud Solutions',
      value: 'cloud-solutions',
    },
    {
      id: 'mobile-app-development',
      label: 'Mobile App Development',
      value: 'mobile-app-development',
    },
    {
      id: 'software-development',
      label: 'Software Development',
      value: 'software-development',
    },
    {
      id: 'ui-ux-design',
      label: 'UI/UX Design',
      value: 'ui-ux-design',
    },
    {
      id: 'other',
      label: 'Other',
      value: 'other',
    },
  ],
  submitButtonText: 'Send',
};
