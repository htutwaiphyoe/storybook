import Box, { BoxProps } from "@/components/Box";
import { cn } from "@/utils";

type StackProps = BoxProps;

const Stack = ({ className, ...props }: StackProps) => {
  return (
    <Box className={cn("flex flex-col items-start", className)} {...props} />
  );
};

export default Stack;
