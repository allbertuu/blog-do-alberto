/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Nunito", "sans-serif"],
            titillium: ["Titillium Web", "sans-serif"],
        },
        extend: {},
    },
    plugins: [],
};
