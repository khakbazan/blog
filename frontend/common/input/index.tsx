import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type InputProps = {
  error?: string;
  label: string;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "placeholder"
>;

export const Input: React.FC<InputProps> = ({ error, label, ...props }) => {
  return (
    <div>
      <div className={`relative ${styles.input_focus}`}>
        <input
          {...props}
          placeholder=" "
          aria-invalid={error ? "true" : undefined}
          aria-errormessage={error ? error : undefined}
          className="w-full h-10 bg-transparent outline-none border border-gray-300 px-3 rounded-md text-xs sm:text-sm"
        />

        <label
          className={`bg-white transition-all absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-xs xs:text-sm`}
        >
          {label}
        </label>
      </div>

      {error ? (
        <p role="" className="text-[0.65rem] text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
};
