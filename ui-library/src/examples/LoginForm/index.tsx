import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import FormControl from "@/components/molecules/FormControl";
import Stack from "@/components/molecules/Stack";

const LoginForm = () => {
  return (
    <Stack className="gap-5 p-10 border rounded-2xl">
      <Text as="h1" align="center" size="3xl" weight="bold">
        Login
      </Text>
      <FormControl
        label="Email"
        inputProps={{
          placeholder: "Enter your email",
          type: "email",
        }}
      />
      <FormControl
        label="Password"
        inputProps={{
          placeholder: "Enter your password",
          type: "password",
        }}
      />
      <Button variant="solid" type="submit">
        Login
      </Button>
      <Text as="a" align="center" size="sm" href="#">
        Forgot Password
      </Text>
    </Stack>
  );
};

export default LoginForm;
