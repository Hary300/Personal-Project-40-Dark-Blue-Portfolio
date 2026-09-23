import { contactSchema, type ContactSchema } from '@/schema/contactSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { contactData } from '@/data/10-contactData';
import InputField from './InputField';
import { FaCheck } from 'react-icons/fa';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      service: [],
    },
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(data);
      alert('Message delivered successfully');
    } catch (error) {
      alert('Error! Please try again');
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = contactData.fields;
  const services = contactData.services;

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
      className='flex flex-col gap-6 lg:gap-10 w-full max-w-180'
    >
      <div className='flex flex-col gap-5'>
        {fields.map((field) => {
          const errorMessage = errors[field.name]?.message;
          return (
            <InputField
              key={field.id}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              register={register}
              type={field.type}
              errorMessage={errorMessage}
            />
          );
        })}
        <div className='flex flex-col gap-3 lg:gap-3.5'>
          <div className='flex justify-between'>
            <p className='text-sm'>{contactData.servicesLabel}</p>
            {errors.service?.message && (
              <p className='text-xs text-red-500'>{errors.service.message}</p>
            )}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {services.map((service) => (
              <div key={service.id} className='flex items-center gap-4'>
                <div className='relative flex items-center'>
                  <input
                    type='checkbox'
                    id={service.id}
                    value={service.value}
                    {...register('service')}
                    className='appearance-none size-5 border-2 rounded-sm checked:bg-primary-300 peer'
                  />
                  <FaCheck className='size-2.5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-100 text-neutral-25' />
                </div>
                <label htmlFor={service.id}>{service.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button type='submit' disabled={isSubmitting} className='w-full'>
        {isSubmitting ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
};

export default ContactForm;
