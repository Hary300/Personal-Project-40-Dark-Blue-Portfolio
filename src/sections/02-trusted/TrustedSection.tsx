import SectionWrapper from '@/components/layouts/SectionWrapper';
import TrustedMarque from '@/components/shadcn-space/marquee/TrustedMarque';
import SectionTitle from '@/components/shared/SectionTitle';
import { trustedData } from '@/data/02-trustedData';

const TrustedSection = () => {
  const title = trustedData.title;
  return (
    <SectionWrapper sectionId='trusted' hasPy className='py-7'>
      <SectionTitle
        title={title}
        titleClassName='text-md lg:text-xl font-semibold'
      />
      <TrustedMarque />
    </SectionWrapper>
  );
};

export default TrustedSection;
