import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

function Button({ ...props }: ButtonProps) {
  return (
    <button className="text-red-300" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
