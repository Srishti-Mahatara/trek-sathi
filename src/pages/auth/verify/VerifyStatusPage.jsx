import {
  Button,
  Text,
  Box,
  Paper,
  Title,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router";

const VerifyStatusPage = () => {
  const navigate = useNavigate();
  // Simulate status from query param or state
  // In real app, parse location.search or location.state
  const status = "success"; // "success" or "expired"

  return (
    <Box className="flex justify-center items-center min-h-[90vh] bg-gray-100">
      <div className={"min-w-[450px]"}>
        <Paper className="rounded-md p-xl shadow-md">
          <Title order={2} className="text-primary">
            {status === "success" ? "Email Verified" : "Link Expired"}
          </Title>
          <Stack>
            {status === "success" ? (
              <>
                <Text className="text-green-600 mt-md">
                  Your email has been successfully verified. You can now reset your password.
                </Text>
                <Button
                  fullWidth
                  className="bg-primary text-white w-full rounded-full mt-md"
                  onClick={() => navigate("/auth/reset")}
                >
                  Set New Password
                </Button>
              </>
            ) : (
              <>
                <Text className="text-red-600 mt-md mb-md">
                  This verification link is invalid or has expired.
                </Text>
                <Button
                  fullWidth
                  className="bg-primary text-white w-full rounded-full mt-md"
                  onClick={() => navigate("/auth/forgot")}
                >
                  Resend Verification Link
                </Button>
              </>
            )}
          </Stack>
        </Paper>
      </div>
    </Box>
  );
};

export default VerifyStatusPage; 