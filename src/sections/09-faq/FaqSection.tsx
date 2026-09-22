import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/09-faqData';

const FaqSection = () => {
  const header = faqData.header;
  return (
    <SectionWrapper sectionId='faq' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default FaqSection;
