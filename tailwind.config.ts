const defaultTheme = require('tailwindcss/defaultTheme')
const primaryColor = {
    '50': '#fdfff7',
    '100': '#f8fcf0',
    '200': '#edfad9',
    '300': '#dff5c1',
    '400': '#c3f099',
    '500': '#9fe870',
    '600': '#86d15a',
    '700': '#63ad3e',
    '800': '#478c29',
    '900': '#2e6917',
    '950': '#184209'
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [],
    theme: {
        extend: {
            typography: (theme: any) => ({
                DEFAULT: {
                    css: {
                        pre: {
                            color: `var(--tw-code-color, ${primaryColor["950"]})`,
                            background: `var(--tw-code-bg, ${primaryColor["200"]})`,
                            borderRadius: '2rem',
                        }
                    }
                }
            }),
            fontFamily: {
                'sans': ['Inter', '-apple-system', ...defaultTheme.fontFamily.sans],
                'display': ['Lora', '-apple-system', ...defaultTheme.fontFamily.sans],
                'mono': ['Inconsolata', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                'neutral': {
                    50: '#E8EAE7'
                },
                'primary': primaryColor,
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
