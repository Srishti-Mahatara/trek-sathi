import {
  PasswordInput,
  Button,
  Box,
  Paper,
  Title,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useNavigate } from "react-router";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: {
      password: (value) =>
        value.length < 6 ? "Password should include at least 6 characters" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  const handleSubmit = (values) => {
    setSuccess(true);
    // TODO: Call API to reset password
  };

  return (
    <Box className="flex justify-center items-center min-h-[90vh] bg-gray-100">
      <div className={"min-w-[450px]"}>
        <Paper className="rounded-md p-xl shadow-md">
          <Title order={2} className="mb-sm text-primary">
            Reset Password
          </Title>
          {success ? (
            <Stack>
              <Text className="text-green-600 mt-md mb-md">
                Your password has been reset successfully!
              </Text>
              <Button
                fullWidth
                className="bg-primary text-white w-full rounded-full mt-md"
                onClick={() => navigate("/auth")}
              >
                Go to Login
              </Button>
            </Stack>
          ) : (
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack>
                <PasswordInput
                  withAsterisk
                  radius={"md"}
                  label="New Password"
                  placeholder="Enter new password"
                  {...form.getInputProps("password")}
                />
                <PasswordInput
                  withAsterisk
                  radius={"md"}
                  label="Confirm Password"
                  placeholder="Re-enter new password"
                  {...form.getInputProps("confirmPassword")}
                />
                <Button
                  type="submit"
                  fullWidth
                  className="bg-primary text-white w-full rounded-full mt-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Reset Password
                </Button>
              </Stack>
            </form>
          )}
        </Paper>
      </div>
    </Box>
  );
};

export default ResetPasswordPage; 