import { Grid, Text, TextInput, Button, Group, ActionIcon } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandPinterest } from '@tabler/icons-react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-sm sm:py-md md:py-[60px] px-xs sm:px-sm md:px-[10%]">
            <Grid gutter="md" className="mb-xs sm:mb-sm md:mb-[40px]">
                {/* Logo & Description */}
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} className="text-center sm:text-left">
                    <div className="logo flex items-center text-primary-light text-xl sm:text-2xl font-bold mb-xs sm:mb-sm justify-center sm:justify-start">
                        <i className="fas fa-globe-americas mr-2"></i> TravelBuddy
                    </div>
                    <Text color="gray.4" size="xs" sm="sm" className="max-w-[400px] leading-relaxed mt-xs sm:mt-sm mx-auto sm:mx-0">
                        Your trusted companion for authentic travel experiences around the world.
                    </Text>
                </Grid.Col>

                {/* Links */}
                <Grid.Col span={{ base: 12, sm: 6, md: 4 }} className="mt-xs sm:mt-0">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly gap-xs sm:gap-md">
                        <div className="link-group text-center sm:text-left">
                            <Text weight={700} size="sm" sm="lg" className="mb-xs sm:mb-sm text-white">
                                Company
                            </Text>
                            <ul className="list-none space-y-2 sm:space-y-3">
                                {['About Us', 'Careers', 'Press', 'Partners'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-primary-light transition-colors text-xs sm:text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="link-group text-center sm:text-left">
                            <Text weight={700} size="sm" sm="lg" className="mb-xs sm:mb-sm text-white">
                                Resources
                            </Text>
                            <ul className="list-none space-y-2 sm:space-y-3">
                                {['Travel Guides', 'FAQs', 'Support', 'Privacy Policy'].map((item) => (
                                    <li key={item}>
                                        <Link to={"/"} className="text-gray-400 hover:text-primary-light transition-colors text-xs sm:text-sm">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Grid.Col>

                {/* Newsletter & Social */}
                <Grid.Col span={{ base: 12, sm: 12, md: 4 }} className="mt-xs sm:mt-0">
                    <div className="w-full text-center sm:text-end">
                        <Text weight={700} size="sm" sm="lg" className="mb-xxs sm:mb-xs text-white">
                            Stay Updated
                        </Text>
                        <Text size="xs" sm="sm" className="mb-xs sm:mb-sm leading-relaxed text-gray-400">
                            Subscribe to receive travel tips and exclusive offers
                        </Text>

                        <form className="subscribe-form flex flex-col sm:flex-row mb-sm sm:mb-md justify-center sm:justify-end gap-xs">
                            <TextInput
                                placeholder="Your email address"
                                classNames={{
                                    input: "bg-gray-800 text-white rounded-md sm:rounded-l-md sm:rounded-r-none border-none placeholder-gray-500 w-full sm:w-[250px] text-xs sm:text-sm",
                                }}
                                type="email"
                            />
                            <Button
                                type="submit"
                                className="rounded-md sm:rounded-l-none sm:rounded-r-md bg-primary hover:bg-primary-dark font-semibold text-xs sm:text-sm"
                                styles={{ root: { padding: '5px 20px' } }}
                            >
                                Subscribe
                            </Button>
                        </form>

                        <Group spacing="sm" sm="md" className="flex justify-center sm:justify-end">
                            {[IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandPinterest].map(
                                (Icon, idx) => (
                                    <ActionIcon
                                        key={idx}
                                        component="a"
                                        href="#"
                                        size={32}
                                        sm={36}
                                        radius="xl"
                                        className="bg-gray-800 text-white hover:bg-primary transition-all"
                                        style={{ transitionDuration: '0.2s' }}
                                    >
                                        <Icon size={16} sm={18} />
                                    </ActionIcon>
                                )
                            )}
                        </Group>
                    </div>
                </Grid.Col>
            </Grid>

            <div className="copyright border-t border-gray-800 pt-xs sm:pt-sm md:pt-5 text-center text-gray-500 text-[10px] sm:text-xs md:text-sm">
                &copy; 2025 TravelBuddy. All rights reserved.
            </div>
        </footer>
    );
}
