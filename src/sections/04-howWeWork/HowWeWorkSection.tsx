import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { howWeWorkData } from '@/data/04-howWeWorkData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HowWeWorkSection = () => {
  const header = howWeWorkData.header;
  const items = howWeWorkData.items;
  return (
    <SectionWrapper sectionId='how-we-work' hasGap hasPy>
      <SectionTitle title={header.title} subtitle={header.subtitle} />

      <Accordion type='single' collapsible defaultValue='item-1'>
        <div className='relative flex flex-col gap-5'>
          {items.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className='grid grid-cols-[auto_1fr] gap-4 lg:gap-6'
            >
              <div className='relative flex items-center'>
                <div className='flex justify-center items-center rounded-full size-10 lg:size-12 bg-primary-300'>
                  {index + 1}
                </div>
                {index === 0 && (
                  <div className='absolute top-0 inset-x-0 bg-black h-1/2 -z-1' />
                )}
                {index === items.length - 1 && (
                  <div className='absolute bottom-0 inset-x-0 bg-black h-1/2 -z-1' />
                )}
              </div>

              <div className='bg-neutral-900 p-4 lg:p-6 rounded-2xl'>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </div>
            </AccordionItem>
          ))}
          <div className='absolute left-0 inset-y-0 w-10 lg:w-12 '>
            <div className='absolute w-px inset-y-0 bg-neutral-800 left-1/2 -translate-x-1/2 -z-2' />
          </div>
        </div>
      </Accordion>
    </SectionWrapper>
  );
};

export default HowWeWorkSection;
