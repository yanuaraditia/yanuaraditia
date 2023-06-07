const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['-apple-system', ...defaultTheme.fontFamily.sans],
                'display': ['Lora', '-apple-system', ...defaultTheme.fontFamily.sans],
                'mono': ['Inconsolata', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                'neutral': {
                    50: '#E8EAE7'
                },
                'primary': {
                    '50': '#fafef8',
                    '100': '#f5fdf1',
                    '200': '#e7f9db',
                    '300': '#d9f6c6',
                    '400': '#bcef9b',
                    '500': '#9fe870',
                    '600': '#8fd165',
                    '700': '#77ae54',
                    '800': '#5f8b43',
                    '900': '#4e7237',
                },
                'neutral-material': {
                    '50': '#f3f5f2',
                    '100': '#e8ebe6',
                    '200': '#c5ccbf',
                    '300': '#a2ad99',
                    '400': '#5c704d',
                    '500': '#163300',
                    '600': '#142e00',
                    '700': '#112600',
                    '800': '#0d1f00',
                    '900': '#0b1900'
                },
                'bright-orange': {
                    '50': '#fffcfa',
                    '100': '#fff9f4',
                    '200': '#ffefe4',
                    '300': '#ffe6d3',
                    '400': '#ffd3b2',
                    '500': '#ffc091',
                    '600': '#e6ad83',
                    '700': '#bf906d',
                    '800': '#997357',
                    '900': '#7d5e47'
                },
                'bright-yellow': {
                    '50': '#fffef8',
                    '100': '#fffdf0',
                    '200': '#fffada',
                    '300': '#fff7c3',
                    '400': '#fff196',
                    '500': '#ffeb69',
                    '600': '#e6d45f',
                    '700': '#bfb04f',
                    '800': '#998d3f',
                    '900': '#7d7333'
                },
                'bright-blue': {
                    '50': '#fafefe',
                    '100': '#f6fcfc',
                    '200': '#e7f8f8',
                    '300': '#d9f3f3',
                    '400': '#bdeaea',
                    '500': '#a0e1e1',
                    '600': '#90cbcb',
                    '700': '#78a9a9',
                    '800': '#608787',
                    '900': '#4e6e6e'
                },
                'bright-pink': {
                    '50': '#fffdfe',
                    '100': '#fffbfd',
                    '200': '#fff5fb',
                    '300': '#ffeff9',
                    '400': '#ffe3f4',
                    '500': '#ffd7ef',
                    '600': '#e6c2d7',
                    '700': '#bfa1b3',
                    '800': '#99818f',
                    '900': '#7d6975'
                },
                'dark-maroon': {
                    '50': '#f5f3f3',
                    '100': '#ebe6e6',
                    '200': '#ccc1c1',
                    '300': '#ad9c9c',
                    '400': '#705151',
                    '500': '#320707',
                    '600': '#2d0606',
                    '700': '#260505',
                    '800': '#1e0404',
                    '900': '#190303'
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
