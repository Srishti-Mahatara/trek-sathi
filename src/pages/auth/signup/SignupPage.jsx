import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Group,
  Text,
  Divider,
  Box,
  Paper,
  Title,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandGoogle, IconBrandFacebook } from "@tabler/icons-react";
import { useNavigate } from "react-router";

const SignupPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Name is required"),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      password: (value) =>
        value.length < 6
          ? "Password should include at least 6 characters"
          : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
      agreeToTerms: (value) =>
        value ? null : "You must agree to the terms and conditions",
    },
  });

  const handleSubmit = (values) => {
    console.log("Signup data:", values);
  };

  return (
    <Box className="flex justify-center items-center min-h-[90vh] bg-gray-100">
      <div className={"min-w-[450px]"}>
        <Paper className="rounded-md p-xl shadow-md">
          <Title order={2} className="mb-sm text-primary">
            Create your account
          </Title>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack>
              <TextInput
                withAsterisk
                radius="md"
                label="Full Name"
                placeholder="John Doe"
                {...form.getInputProps("name")}
              />

              <TextInput
                withAsterisk
                radius="md"
                label="Email"
                placeholder="hello@example.com"
                {...form.getInputProps("email")}
              />

              <PasswordInput
                withAsterisk
                radius="md"
                label="Password"
                placeholder="Your password"
                {...form.getInputProps("password")}
              />

              <PasswordInput
                withAsterisk
                radius="md"
                label="Confirm Password"
                placeholder="Confirm your password"
                {...form.getInputProps("confirmPassword")}
              />

              <Checkbox
                label="I agree to the terms and conditions"
                {...form.getInputProps("agreeToTerms", { type: "checkbox" })}
                className="text-gray-600"
              />

              <Button
                type="submit"
                fullWidth
                className="bg-primary text-white w-full rounded-full mt-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Sign Up
              </Button>
            </Stack>
          </form>

          <Divider label="Or continue with" labelPosition="center" my="lg" />

          <Group grow className="mb-md">
            <Button
              variant="default"
              leftSection={<IconBrandGoogle size={20} />}
              className="rounded-full"
            >
              Google
            </Button>
            <Button
              color="blue"
              leftSection={<IconBrandFacebook size={20} />}
              className="rounded-full"
            >
              Facebook
            </Button>
          </Group>

          <Text size="sm" className="text-gray-600 text-center">
            Already have an account?{" "}
            <Text
              component="span"
              className="text-primary cursor-pointer"
              onClick={() => navigate("/auth")}
            >
              Login
            </Text>
          </Text>
        </Paper>
      </div>
    </Box>
  );
};

export default SignupPage;
