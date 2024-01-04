import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "@/utils";

const cvaClasses = cva([
  "w-full",
  "border",
  "border-gray-400",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:border-primary-600",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

type InputProps = VariantProps<typeof cvaClasses> & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className={cn(cvaClasses({ className }))}
        {...props}
      />
    );
  }
);

export default Input;
