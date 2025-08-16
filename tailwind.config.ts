import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'trending': 'hsl(var(--trending-accent))',
				'new': 'hsl(var(--new-accent))',
				'popular': 'hsl(var(--popular-accent))',
				'latest': 'hsl(var(--latest-accent))',
				'genre-fantasy': 'hsl(var(--genre-fantasy))',
				'genre-action': 'hsl(var(--genre-action))',
				'genre-romance': 'hsl(var(--genre-romance))',
				'genre-mystery': 'hsl(var(--genre-mystery))',
				'genre-scifi': 'hsl(var(--genre-scifi))',
				'genre-horror': 'hsl(var(--genre-horror))',
				'genre-adventure': 'hsl(var(--genre-adventure))',
				'genre-drama': 'hsl(var(--genre-drama))',
				'genre-fantasy-text': 'hsl(var(--genre-fantasy-text))',
				'genre-action-text': 'hsl(var(--genre-action-text))',
				'genre-romance-text': 'hsl(var(--genre-romance-text))',
				'genre-mystery-text': 'hsl(var(--genre-mystery-text))',
				'genre-scifi-text': 'hsl(var(--genre-scifi-text))',
				'genre-horror-text': 'hsl(var(--genre-horror-text))',
				'genre-adventure-text': 'hsl(var(--genre-adventure-text))',
				'genre-drama-text': 'hsl(var(--genre-drama-text))'
			},
			backgroundColor: {
				'hero-bg': 'hsl(var(--hero-background))',
				'solid-primary': 'hsl(var(--solid-primary))',
				'solid-card': 'hsl(var(--solid-card))',
				'solid-hero': 'hsl(var(--solid-hero))'
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'hero': 'var(--shadow-hero)',
				'glow': 'var(--shadow-glow)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
