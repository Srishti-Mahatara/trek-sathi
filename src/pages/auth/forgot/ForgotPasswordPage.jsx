import {
  TextInput,
  Button,
  Group,
  Text,
  Box,
  Paper,
  Title,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useNavigate } from "react-router";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values) => {
    setSubmitted(true);
    // TODO: Call API to send verification link
    // Example: api.post('/auth/forgot-password', { email: values.email })
  };

  return (
    <Box className="flex justify-center items-center min-h-[90vh] bg-gray-100">
      <div className={"min-w-[450px]"}>
        <Paper className="rounded-md p-xl shadow-md">
          <Title order={2} className="mb-sm text-primary">
            Forgot Password
          </Title>
          {submitted ? (
            <Text className="text-green-600 mt-md">
              A verification link has been sent.
            </Text>
          ) : (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack>
                <TextInput
                  withAsterisk
                  radius={"md"}
                  label="Email"
                  placeholder="hello@example.com"
                  {...form.getInputProps("email")}
                />
                <Button
                  type="submit"
                  fullWidth
                  className="bg-primary text-white w-full rounded-full mt-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Send Verification Link
                </Button>
                <Group justify="center">
                  <Text
                    size="sm"
                    className="text-primary cursor-pointer"
                    onClick={() => navigate("/auth")}
                  >
                    Back to Login
                  </Text>
                </Group>
              </Stack>
            </form>
          )}
        </Paper>
      </div>
    </Box>
  );
};

export default ForgotPasswordPage; 