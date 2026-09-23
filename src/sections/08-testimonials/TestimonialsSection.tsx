import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsData } from '@/data/08-testimonialsData';
import { TiStarFullOutline } from 'react-icons/ti';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const header = testimonialsData.header;
  const testimonials = testimonialsData.testimonials;
  return (
    <SectionWrapper sectionId='testimonials' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <Carousel className='w-full flex flex-col gap-6 lg:gap-10'>
        <CarouselContent className='-ml-1 flex gap-5'>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className='basis-full pl-1 sm:basis-1/2 xl:basis-1/3'
            >
              <div className='flex flex-col gap-5 lg:gap-6 rounded-2xl lg:rounded-3xl p-4 lg:p-6 border h-full justify-between'>
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-1'>
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <TiStarFullOutline
                          key={index}
                          className='fill-[#F3B64C] size-6'
                        />
                      )
                    )}
                  </div>
                  <p className='text-sm lg:text-md'>{testimonial.quote}</p>
                </div>
                <div className='flex gap-4 items-center'>
                  <div className='size-12 shrink-0 rounded-full overflow-hidden'>
                    <img src={testimonial.author.avatar} alt='author avatar' />
                  </div>
                  <div className='flex flex-col'>
                    <p className='font-bold lg:font-semibold text-sm lg:text-md'>
                      {testimonial.author.name}
                    </p>
                    <p className='text-sm text-neutral-400 lg:text-md'>
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex justify-center gap-3 lg:'>
          <CarouselPrevious className='static size-10 lg:size-12' />
          <CarouselNext className='static size-10 lg:size-12' />
        </div>
      </Carousel>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
