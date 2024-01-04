import { useId } from "react";
import Box, { BoxProps } from "@/components/atoms/Box";
import Text from "@/components/atoms/Text";
import Input, { InputProps } from "@/components/atoms/Input";

type FormControlProps = {
  label?: string;
  inputProps?: InputProps;
  helperText?: string;
  containerProps?: BoxProps;
};

const FormControl = ({
  containerProps,
  label,
  inputProps,
  helperText,
}: FormControlProps) => {
  const uid = useId();

  return (
    <Box {...containerProps}>
      {label && (
        <Text as="label" size="sm" htmlFor={uid} className="block mb-2">
          {label}
        </Text>
      )}
      <Input id={uid} {...inputProps} />
      {helperText && (
        <Text as="span" size="xs" className="mt-1">
          {helperText}
        </Text>
      )}
    </Box>
  );
};

export default FormControl;
