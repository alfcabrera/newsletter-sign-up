/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.{html, js}', './**/*.{html, js}'],
    theme: {
        fontFamily: {
            sans: ["'Roboto'", "'sans-serif'"],
        },
        extend: {
            colors: {
                'slate-grey': '#242742',
                'charcoal-grey': '#36384e',
                grey: '#9294a0',
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
