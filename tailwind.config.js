import { join } from 'path'

export default {
    // ...
    theme: {
        extend: {
            boxShadow: {
                outline: "0 0 0 1px rgba(66, 153, 225, 0.5)",
            },
            colors: {
                "orange-button": "#FF872E",
                "green-button": "#1ABC9C",
                "purple-hover": "#4C52F8",
                "purple-hover-stroke": "#8286FF",
                "purple-progress": "#3B41E3",
            },
            borderRadius: {
                20: "20px",
            },
        },
    },
    fontFamily: {
        sans: ["Poppins", "sans-serif"],
    },
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: join(__dirname, 'tailwind.config.js'),
                    'postcss-pxtorem': {
                        propList: ['*', '!border*']
                    }
                }
            }
        }
    }
}
