import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';
import type {
  FieldError,
  FieldErrorsImpl,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { Alert, AlertDescription } from '../ui/alert';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type FileInputProps = {
  label: string;
  name: string;
  error?: FieldError | FieldErrorsImpl<any> | undefined; // Updated type to allow for the merged errors
  register: UseFormRegister<any>;
  required?: boolean;
  placeholder?: string;
  accept: string;
  rules?: RegisterOptions<any>;
  className?: HTMLProps<HTMLElement>['className'];
};
export default function FileInput({
  label,
  name,
  register,
  required,
  error,
  rules,
  placeholder,
  accept,
  className,
}: FileInputProps) {
  return (
    <div className="w-full">
      <Label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      <Input
        placeholder={placeholder}
        type="file"
        accept={accept}
        {...register(name, rules)}
        className={cn(
          'w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary',
          className,
        )}
        // onChange={async (e) => {
        //   await register("avatar").onChange(e.target.files?.[0]);
        // }}
      />

      {error && (
        <Alert variant="destructive" className="py-2 mt-2">
          <AlertDescription className="text-xs">{error?.message?.toString()}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
