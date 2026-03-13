/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#e63946'
                },
                whatsapp: '#25D366',
                brand: {
                  light: '#12121a'
                },
                dark: '#0a0a0f',
                card: '#12121a',
            },
            fontFamily: {
                display: ['Orbitron', 'sans-serif'],
                body: ['Poppins', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
