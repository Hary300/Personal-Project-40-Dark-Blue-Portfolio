import type { FieldLabel, FieldType } from '@/data/10-contactData';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: FieldLabel;
  type: FieldType;
  placeholder: string;
  errorMessage?: string;
}

const InputField = <T extends FieldValues>({
  register,
  name,
  label,
  placeholder,
  type,
  errorMessage,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-1.5'>
      <div className='flex justify-between items-center'>
        <label htmlFor={name} className='text-xs lg:text-sm'>
          {label}
        </label>
        {errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}
      </div>
      {type === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder}
          rows={5}
          className='px-3 py-2 lg:px=4 rounded-md lg:rounded-2xl bg-neutral-900 placeholder:text-sm placeholder:text-neutral-500 lg:placeholder:text-md focus:outline-0'
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          {...register(name)}
          placeholder={placeholder}
          className='px-3 py-2 lg:px=4 rounded-md lg:rounded-2xl bg-neutral-900 placeholder:text-sm placeholder:text-neutral-500 lg:placeholder:text-md focus:outline-0'
        />
      )}
    </div>
  );
};

export default InputField;
