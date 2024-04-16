import { PropsWithChildren, ReactNode } from "react";
import { ImSpinner6 } from "react-icons/im";

type ButtonProps = PropsWithChildren<{
  shape?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "ghost"
    | "danger-ghost";
  size?: "small" | "medium" | "full";
  rounded?: "md" | "lg" | "full";
  isPending?: boolean;
  addon?: ReactNode;
}> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export const Button: React.FC<ButtonProps> = ({
  shape = "primary",
  isPending,
  size = "medium",
  rounded = "md",
  addon,
  children,
  ...props
}) => {
  const shapeDetail = {
    primary: "bg-primary text-white  hover:shadow-primaryBlue",
    secondary:
      "bg-gray-50 text-black-2 border border-gray-300 hover:bg-gray-200/80",
    success: "bg-emerald-500 text-white",
    danger: "bg-red-700/85 text-white",
    ghost:
      "bg-transparent text-gray-600/90 border border-gray-400/85 hover:bg-gray-100",
    "danger-ghost": "bg-red-50 text-red-600 border border-red-200",
  };

  const sizeDetail = {
    small: "px-4 py-1.5 text-sm",
    medium: "px-5 sm:px-6 py-2 text-xs xs:text-sm",
    full: "px-6 py-2.5 w-full xl:text-base",
  };

  const roundedDetail = {
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <button
      {...props}
      className={`${roundedDetail[rounded]} flex items-center justify-center gap-x-1 transition-all ${sizeDetail[size]} ${shapeDetail[shape]}`}
    >
      {isPending ? (
        <>
          <ImSpinner6 className="animate-spin" size={22} />
        </>
      ) : (
        <>
          {addon ? addon : null}
          {children}
        </>
      )}
    </button>
  );
};
