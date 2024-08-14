import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                mono: ['major-mono-display', ...defaultTheme.fontFamily.mono],
                'major-mono-display': ['Major Mono Display', 'monospace'],
            },
        },
    },

    plugins: [forms],
};
