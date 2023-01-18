/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            titillium: ['Titillium Web', 'sans-serif'],
        },
        colors: {
            blue: {
                50: '#E7EDF4',
                100: '#C4D4E3',
                200: '#AFC2D4',
                300: '#3A536B',
                400: '#1C2F41',
                500: '#112131',
                600: '#0B1B2B',
                700: '#071422',
                800: '#040F1A',
            },
            red: {
                500: '#F8355B',
            },
            white: '#FFFFFF',
            black: '#000000',
        },
        extend: {},
    },
    plugins: [],
};
