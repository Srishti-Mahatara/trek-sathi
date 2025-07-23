import {
  Container,
  Group,
  Anchor,
  Box,
  Button,
  Burger,
  Drawer,
  Stack,
  ActionIcon,
} from "@mantine/core";
import {
  IconGlobe,
  IconCompass,
  IconUserCircle,
  IconLogin,
  IconX,
  IconMessage,
  IconSearch,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const navLinks = [
    {to: "/search", icon:IconSearch, label:"Search"},
    { to: "/explore", icon: IconCompass, label: "Explore" },
    { to: "/profile", icon: IconUserCircle, label: "Profile" },
    { to: "/chat", icon: IconMessage, label: "Chat" },
    
  ];

  return (
    <Box
      component="header"
      className="sticky top-none z-[100] shadow-sm bg-white"
    >
      <div className="flex items-center justify-between h-[70px] px-sm sm:px-md md:px-xl">
        {/* Logo */}
        <Link
          to="/"
          className="text-primary text-lg sm:text-[24px] font-bold tracking-[-0.5px] flex items-center gap-2 no-underline"
        >
          <span className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full bg-primary inline-block" />
          <IconGlobe size={18} className="sm:w-[20px] sm:h-[20px]" />
          <span className="hidden sm:inline">Trek-Sathi</span>
          <span className="sm:hidden">TS</span>
        </Link>

        {/* Desktop Controls */}
        <Group gap="xl" className="items-center hidden sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-600 font-medium no-underline relative hover:text-primary hover:after:content-[''] hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-primary hover:after:scale-x-75 hover:after:transition-transform"
            >
              <Group gap={6}>
                <link.icon size={18} />
                {link.label}
              </Group>
            </Link>
          ))}

          <Button
            onClick={() => navigate("/auth")}
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-5 rounded-md shadow-sm hover:shadow-md transition-all transform hover:-translate-y-[2px] no-underline flex items-center gap-2"
          >
            <IconLogin size={18} />
            Login
          </Button>
        </Group>

        {/* Mobile Menu Button */}
        <Burger
          opened={mobileMenuOpened}
          onClick={() => setMobileMenuOpened((o) => !o)}
          className="sm:hidden"
          size="sm"
          color="gray"
        />

        {/* Mobile Menu Drawer */}
        <Drawer
          opened={mobileMenuOpened}
          onClose={() => setMobileMenuOpened(false)}
          size="100%"
          padding="md"
          className="sm:hidden"
          position="right"
          withCloseButton={false}
        >
          <div className="flex justify-end mb-xl">
            <ActionIcon
              variant="subtle"
              color="gray"
              size="xl"
              onClick={() => setMobileMenuOpened(false)}
              className="hover:bg-gray-100"
            >
              <IconX size={24} />
            </ActionIcon>
          </div>
          <Stack spacing="xl" className="mt-xl">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 font-medium no-underline text-lg"
                onClick={() => setMobileMenuOpened(false)}
              >
                <Group gap={6}>
                  <link.icon size={24} />
                  {link.label}
                </Group>
              </Link>
            ))}

            <Button
              onClick={() => {
                navigate("/auth");
                setMobileMenuOpened(false);
              }}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md shadow-sm hover:shadow-md transition-all w-full"
            >
              <Group gap={6} className="w-full justify-center">
                <IconLogin size={24} />
                Login
              </Group>
            </Button>
          </Stack>
        </Drawer>
      </div>
    </Box>
  );
}
