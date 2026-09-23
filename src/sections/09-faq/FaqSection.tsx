import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/09-faqData';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  const header = faqData.header;
  const faqs = faqData.faqs;
  return (
    <SectionWrapper
      sectionId='faq'
      hasGap
      hasPy
      className='flex flex-col items-center'
    >
      <SectionTitle title={header.title} subtitle={header.subtitle} />

      <Accordion
        type='single'
        collapsible
        defaultValue='item-1'
        className='max-w-180 flex flex-col gap-5'
      >
        {faqs.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <div className='bg-neutral-900 p-4 lg:p-6 rounded-2xl'>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;
