import { FC, MutableRefObject } from "react";

interface FormInputProps {
  label: string;
  type: string;
  ref: MutableRefObject<HTMLInputElement | null>;
  classname?: string;
}

const FormInput: FC<FormInputProps> = ({
  label,
  type,
  ref,
  classname = "",
}: FormInputProps) => {
  const inputClasses =
    "outline-0 px-2 py-1 border border-primary-200 dark:border-primary-1000 dark:bg-primary-900";
  return (
    <div className={`${classname} flex flex-col`}>
      <label className="font-medium">{label}:</label>
      {type !== "text-area" ? (
        <input ref={ref} type={`${type}`} className={inputClasses} />
      ) : (
        <textarea className={inputClasses}></textarea>
      )}
    </div>
  );
};

export default FormInput;
