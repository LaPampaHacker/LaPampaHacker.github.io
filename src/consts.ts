import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "M1000",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Joaquin Hernandez",
}

// Work Page
export const WORK: Page = {
  TITLE: "Career path",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Publicaciones",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Career path", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Publicaciones", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "joaquinhernandezcacu@gmail.com",
    HREF: "mailto:joaquinhernandezcacu@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "LaPampaHacker",
    HREF: "https://github.com/LaPampaHacker"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Joaquin Hernandez",
    HREF: "https://www.linkedin.com/in/joaquin-hernandez-131075332/",
  },
  { 
    NAME: "X (Twitter)",
    ICON: "twitter-x",
    TEXT: "Joaquin Hernandez",
    HREF: "https://x.com/Joa22092003",
  },
]

