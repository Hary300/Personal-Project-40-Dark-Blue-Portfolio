import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { industryData } from '@/data/06-industryData';

const IndustrySection = () => {
  const header = industryData.header;
  return (
    <SectionWrapper sectionId='industry' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default IndustrySection;
