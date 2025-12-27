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
                    DEFAULT: '#2563EB' // blue-600 main
                },
                whatsapp: '#25D366',
                brand: {
                  light: '#f0f7ff'
                }
            }
        },
    },
    plugins: [],
}
