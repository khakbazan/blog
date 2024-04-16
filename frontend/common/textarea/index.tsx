import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type TextareaProps = {
  error?: string;
  label: string;
} & Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "placeholder"
>;

export const Textarea: React.FC<TextareaProps> = ({
  error,
  label,
  ...props
}) => {
  return (
    <div>
      <div className={`relative ${styles.input_focus}`}>
        <textarea
          {...props}
          placeholder=" "
          aria-invalid={error ? "true" : undefined}
          aria-errormessage={error ? error : undefined}
          className="w-full h-28 bg-transparent resize-none outline-none border border-gray-300 p-4 text-sm rounded-md"
        />

        <label
          className={`bg-white transition-all absolute text-sm top-6 right-3 -translate-y-1/2 pointer-events-none`}
        >
          {label}
        </label>
      </div>

      {error ? <p className="text-xs mt-1 text-red-600">{error}</p> : null}
    </div>
  );
};
