// tailwind.config.js
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                wdhomescolorprimary: 'var(--wdhomes-color-primary)',
            },
        },
    },
    plugins: [],
}
