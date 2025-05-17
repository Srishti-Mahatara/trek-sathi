import { Container, Group, Anchor, Box, Button } from "@mantine/core";
import {
  IconGlobe,
  IconCompass,
  IconUserCircle,
  IconLogin,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router"; // If using React Router

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box
      component="header"
      className="sticky top-none z-[100] shadow-sm bg-white"
    >
      <div className="flex items-center justify-between h-[70px] px-[10%]">
        {/* Logo */}
        <Link
          to="/"
          className="text-primary text-[24px] font-bold tracking-[-0.5px] flex items-center gap-2 no-underline"
        >
          <span className="w-[10px] h-[10px] rounded-full bg-primary inline-block" />
          <IconGlobe size={20} />
          Trek-Sathi
        </Link>

        {/* Controls */}
        <Group gap="lg" className="items-center">
          <Link
            to="/explore"
            className="text-gray-600 font-medium no-underline relative hover:text-primary hover:after:content-[''] hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-primary hover:after:scale-x-75 hover:after:transition-transform"
          >
            <Group gap={6}>
              <IconCompass size={18} />
              Explore
            </Group>
          </Link>

          <Link
            to="/profile"
            className="text-gray-600 font-medium no-underline relative hover:text-primary hover:after:content-[''] hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-primary hover:after:scale-x-75 hover:after:transition-transform"
          >
            <Group gap={6}>
              <IconUserCircle size={18} />
              Profile
            </Group>
          </Link>

          <Button
            onClick={() => navigate("/auth")}
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-5 rounded-md shadow-sm hover:shadow-md transition-all transform hover:-translate-y-[2px] no-underline flex items-center gap-2"
          >
            <IconLogin size={18} />
            Login
          </Button>

          {/* Example for logout button (if needed in future) */}
          {/* <div className="bg-primary text-white px-5 py-2 rounded-md cursor-pointer">Logout</div> */}
        </Group>
      </div>
    </Box>
  );
}
