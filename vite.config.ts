import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

// https://vite.dev/config/
export default defineConfig(() => {
    const buildDate = new Date()

    return {
        plugins: [
            TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
            react(),
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        define: {
            __LAST_UPDATED__: JSON.stringify(
                `${MONTHS[buildDate.getMonth()]} ${buildDate.getFullYear()}`,
            ),
        },
    }
})
