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
import {useNavigate} from "react-router";

const LoginPage = () => {
  const navigate=useNavigate()
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return (
      <Box className="flex justify-center items-center min-h-[90vh] bg-gray-100">
        <div className={'min-w-[450px]'}>
          <Paper className="rounded-md p-xl shadow-md">
            <Title order={2} className="mb-sm text-primary">
              Welcome, login with
            </Title>

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack>
                <TextInput
                    withAsterisk
                    radius={'md'}
                    label="Email"
                    placeholder="hello@example.com"
                    {...form.getInputProps("email")}
                />

                <PasswordInput
                    withAsterisk
                    radius={'md'}
                    label="Password"
                    placeholder="Your password"
                    {...form.getInputProps("password")}
                />

                <Group justify="space-between" mt="xs">
                  <Checkbox
                      label="Remember me"
                      {...form.getInputProps("rememberMe", { type: "checkbox" })}
                      className={'text-gray-600'}
                  />
                  <Text
                      size="sm"
                      component="a"
                      className="text-primary cursor-pointer"
                      onClick={() => navigate('/auth/forgot')}
                  >
                    Forgot password?
                  </Text>
                </Group>

                <Text size="sm" className="text-gray-600">
                  Don't have an account?{" "}
                  <Text component="span" className="text-primary cursor-pointer" onClick={()=>navigate('/auth/signup')}>
                    Register
                  </Text>
                </Text>

                <Button
                    type="submit"
                    fullWidth
                    className="bg-primary text-white w-full rounded-full mt-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Login
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
          </Paper>
        </div>
      </Box>

  );
};

export default LoginPage;
