// Personal data configuration from environment variables
export const personalData = {
  name: process.env.NEXT_PUBLIC_NAME,
  email: process.env.NEXT_PUBLIC_EMAIL,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  github: process.env.NEXT_PUBLIC_GITHUB_URL,
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
  phone: process.env.NEXT_PUBLIC_PHONE,
  location: process.env.NEXT_PUBLIC_LOCATION,
} as const

// Social media links array for easy iteration
export const socialLinks = [
  {
    name: 'GitHub',
    url: personalData.github,
    icon: 'Github',
    hoverColor: 'hover:shadow-teal-500/30',
  },
  {
    name: 'LinkedIn',
    url: personalData.linkedin,
    icon: 'Linkedin',
    hoverColor: 'hover:shadow-emerald-500/30',
  },
  {
    name: 'Email',
    url: `mailto:${personalData.email}`,
    icon: 'Mail',
    hoverColor: 'hover:shadow-green-500/30',
  },
] as const

export type SocialLink = typeof socialLinks[number]
