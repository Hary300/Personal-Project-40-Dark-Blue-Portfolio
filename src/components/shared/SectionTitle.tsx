import { cn } from 'cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}
const SectionTitle = ({
  title,
  subtitle,
  description,
  className,
  titleClassName,
}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-4 text-center', className)}>
      <h2
        className={cn(
          'font-bold text-display-sm lg:text-display-lg',
          titleClassName
        )}
      >
        {title}
      </h2>
      {(subtitle || description) && (
        <p className='text-neutral-400 text-sm lg:text-md max-w-226.75 mx-auto'>
          {subtitle || description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
