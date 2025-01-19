import { RegisterOptions } from "react-hook-form";
import { Alert, AlertDescription } from "../ui/alert";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { PostCompanySchema } from "@/app/dashboard/companies/_core/interfaces";
import { HTMLProps } from "react";
import { cn } from "@/lib/utils";

type TextInputProps = {
  label: string;
  name: string;
  error?: string;
  register: any;
  required?: boolean;
  placeholder?: string;
  rules?: RegisterOptions<PostCompanySchema>;
  className?: HTMLProps<HTMLElement>["className"];
};
export default function TextInput({
  label,
  name,
  register,
  required,
  error,
  rules,
  placeholder,
  className,
}: TextInputProps) {
  return (
    <div className="w-full">
      <Label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      <Input
        placeholder={placeholder}
        name={name}
        type="text"
        {...register(name, rules)}
        className={cn(
          "w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
          className
        )}
      />

      {error && (
        <Alert variant="destructive" className="py-2 mt-2">
          <AlertDescription className="text-xs">{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
