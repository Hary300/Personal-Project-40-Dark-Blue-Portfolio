import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactData } from '@/data/10-contactData';

const ContactSection = () => {
  const header = contactData.header;
  return (
    <SectionWrapper sectionId='contact' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default ContactSection;
