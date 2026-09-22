import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { aboutData } from '@/data/03-aboutData';

const AboutSection = () => {
  const aboutImg = aboutData.image;
  const title = aboutData.header.title;
  const description = aboutData.description;
  const stats = aboutData.stats;
  return (
    <SectionWrapper
      sectionId='about'
      className='flex flex-col gap-6 md:flex-row md:gap-12 pt-5 pb-10 lg:py-20 items-center'
    >
      <div className='rounded-2xl overflow-hidden max-w-110.5'>
        <img
          src={aboutImg.srcImg}
          alt={aboutImg.altText}
          className='size-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-6 md:gap-12'>
        <SectionTitle
          title={title}
          description={description}
          className='text-left'
        />

        <div className='flex flex-col gap-5 md:grid md:grid-cols-3  md:gap-8 divide-y divide-x-0 md:divide-x md:divide-y-0'>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex flex-col gap-1.5 pb-5 md:pb-0 pr-0 md:pr-8'
            >
              <p className='text-center font-bold text-display-md md:text-display-lg'>
                {stat.value}
              </p>
              <p className='text-center text-neutral-400 text-sm md:text-md'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
