import { Grid, Text, TextInput, Button, Group, ActionIcon } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandPinterest } from '@tabler/icons-react';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-[60px] px-[10%]">
            <Grid gutter="xl" className=" mb-[40px]">
                {/* Logo & Description */}
                <Grid.Col span={4} >
                    <div className="logo flex items-center text-primary-light text-2xl font-bold mb-sm">
                        <i className="fas fa-globe-americas mr-2"></i> TravelBuddy
                    </div>
                    <Text color="gray.4" size="sm" className="max-w-[400px] leading-relaxed mt-4">
                        Your trusted companion for authentic travel experiences around the world.
                    </Text>
                </Grid.Col>

                {/* Links */}
                <Grid.Col span={4}  className="flex flex-col md:flex-row justify-evenly">
                    <div className="link-group">
                        <Text weight={700} size="lg" className="mb-sm text-white">
                            Company
                        </Text>
                        <ul className="list-none space-y-3">
                            {['About Us', 'Careers', 'Press', 'Partners'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-primary-light transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="link-group">
                        <Text weight={700} size="lg" className="mb-sm text-white">
                            Resources
                        </Text>
                        <ul className="list-none space-y-3">
                            {['Travel Guides', 'FAQs', 'Support', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link to={"/"} className="text-gray-400 hover:text-primary-light transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid.Col>

                {/* Newsletter & Social */}
                <Grid.Col span={4} className={"flex justify-end"}>
                    <div className={"w-full text-end"}>
                        <Text weight={700} size="lg" className="mb-xs text-white">
                            Stay Updated
                        </Text>
                        <Text  size="sm" className="mb-sm leading-relaxed text-gray-400">
                            Subscribe to receive travel tips and exclusive offers
                        </Text>

                        <form className="subscribe-form flex mb-md justify-end">
                            <TextInput
                                placeholder="Your email address"
                                classNames={{
                                    input: "bg-gray-800 text-white rounded-l-md border-none placeholder-gray-500 w-[250px]",
                                }}
                                type="email"
                            />
                            <Button
                                type="submit"
                                className="rounded-r-md bg-primary hover:bg-primary-dark font-semibold"
                                styles={{ root: { padding: '5px 20px' } }}
                            >
                                Subscribe
                            </Button>
                        </form>

                        <Group spacing="md" className="flex justify-end">
                            {[IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandPinterest].map(
                                (Icon, idx) => (
                                    <ActionIcon
                                        key={idx}
                                        component="a"
                                        href="#"
                                        size={36}
                                        radius="xl"
                                        className="bg-gray-800 text-white hover:bg-primary transition-all"
                                        style={{ transitionDuration: '0.2s' }}
                                    >
                                        <Icon size={18} />
                                    </ActionIcon>
                                )
                            )}
                        </Group>
                    </div>

                </Grid.Col>
            </Grid>

            <div className="copyright border-t border-gray-800 pt-5 text-center text-gray-500 text-sm">
                &copy; 2025 TravelBuddy. All rights reserved.
            </div>
        </footer>
    );
}
