import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/10-contactData';
import ContactForm from './components/ContactForm';

const ContactSection = () => {
  const header = contactData.header;
  return (
    <SectionWrapper
      sectionId='contact'
      hasGap
      hasPy
      className='flex flex-col items-center'
    >
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactSection;
