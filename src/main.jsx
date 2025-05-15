import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import App from "./App.jsx";

// Change the import order - first Mantine, then your custom CSS
import "@mantine/core/styles.css";
import "./index.css"; // Tailwind styles
import "./App.css";   // Your custom styles last for highest precedence


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MantineProvider>
            <ModalsProvider>
                <App />
            </ModalsProvider>
        </MantineProvider>
    </StrictMode>
);