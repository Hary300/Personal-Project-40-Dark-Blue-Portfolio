import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { servicesData } from '@/data/05-servicesData';

const ServiceSection = () => {
  const header = servicesData.header;
  const services = servicesData.services;
  return (
    <SectionWrapper sectionId='service' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5'>
        {services.map((service) => (
          <div
            key={service.id}
            className='flex flex-col gap-4 lg:gap-6 py-5 px-4 rounded-2xl border items-center'
          >
            <div className='flex justify-center items-center size-12 lg:size-14 shrink-0 rounded-full bg-primary-300'>
              <img src={service.icon} alt='icon' />
            </div>
            <div className='flex flex-col gap-1 text-center'>
              <h3 className='font-semibold text-md lg:text-xl'>
                {service.title}
              </h3>
              <p className='text-neutral-400 text-sm lg:text-md'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServiceSection;
