import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/08-testimonialsData';

const TestimonialsSection = () => {
  const header = testimonialsData.header;
  return (
    <SectionWrapper sectionId='testimonials' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default TestimonialsSection;
