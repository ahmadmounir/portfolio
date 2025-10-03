// Personal data configuration from environment variables
export const personalData = {
  name: process.env.NEXT_PUBLIC_NAME || 'Ahmad Munir Malak',
  email: process.env.NEXT_PUBLIC_EMAIL || 'ahmadmallak2004@gmail.com',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/ahmad-munir-malak-4030aa317/',
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/ahmadmounir',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://ahmadmunirmalak.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  location: process.env.NEXT_PUBLIC_LOCATION || 'Turkey',
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