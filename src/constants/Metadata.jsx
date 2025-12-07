
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const MetaData = {
  "homepage": {
    title: "Hima Varsha Barla | UI/UX Designer Portfolio",
    description: "Explore my UI/UX designer portfolio where I transform complex ideas into simple, user-focused digital experiences through creative design and thoughtful user experience.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: baseUrl },
    openGraph: {
      title: "Hima Varsha Barla | UI/UX Designer Portfolio",
      description:
        "Explore my UI/UX designer portfolio where I transform complex ideas into simple, user-focused digital experiences through creative design and thoughtful user experience.",
      url: baseUrl,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [
        {
          url: "/assets/ogImages/Home.png",
          width: 1200,
          height: 630,
          alt: "Hima Varsha UI/UX Portfolio",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hima Varsha Barla | UI/UX Designer Portfolio",
      description:
        "Explore my UI/UX designer portfolio where I transform complex ideas into simple, user-focused digital experiences through creative design and thoughtful user experience.",
      images: ["/assets/ogImages/Home.png"],
    },
    keywords: [
      "UI/UX designer",
      "UI/UX designer portfolio",
      "hima varsha",
      "hima varsha barla",
      "varsha",
      "hima",
      "portfolio",
      "hima varsha portfolio",
      "hima varsha barla portfolio",
      "creative design",
      "user experience",
      "digital design",
      "design thinking",
      "product design",
      "visual storytelling"
    ],
    other: {
      "site_name": "Hima Varsha Barla | Portfolio",
      "author": "Hima Varsha",
      "creator": "Hima Varsha",
      "robots": "index, follow",
    },
    icons: {
      icon: [
        { url: "/assets/icons/favicon.png" },
        { url: "/assets/icons/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/assets/icons/favicon.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/assets/icons/favicon.png"],
    },
  },

  "work": {
    title: "My Work | Hima Varsha UI/UX Design Portfolio",
    description:
      "Browse my UI/UX designer portfolio featuring Result Insight Hub, Libri Hub, Shopify, and GenAI Tools, showcasing creative design and user experience skills.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/my-work` },
    openGraph: {
      title: "My Work | Hima Varsha UI/UX Design Portfolio",
      description:
        "Browse my UI/UX designer portfolio featuring Result Insight Hub, Libri Hub, Shopify, and GenAI Tools, showcasing creative design and user experience skills.",
      url: `${baseUrl}/my-work`,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [{ url: "/assets/ogImages/MyWork.png", width: 1200, height: 630, alt: "Hima Varsha Work" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "My Work | Hima Varsha UI/UX Design Portfolio",
      description:
        "Browse my UI/UX designer portfolio featuring Result Insight Hub, Libri Hub, Shopify, and GenAI Tools, showcasing creative design and user experience skills.",
      images: ["/assets/ogImages/MyWork.png"],
    },
    other: {
      "site_name": "Hima Varsha Portfolio",
    },
    icons: {
      icon: [
        { url: "/assets/icons/favicon.png" },
        { url: "/assets/icons/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/assets/icons/favicon.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/assets/icons/favicon.png"],
    },
  },

  "connect": {
    title: "Connect with Hima Varsha Barla | UI/UX Designer",
    description:
      "Let’s collaborate! Contact me, UI/UX designer Hima Varsha, for product design, UX projects, collaborations, and creative digital design opportunities.",
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/connect` },
    openGraph: {
      title: "Connect with Hima Varsha Barla | UI/UX Designer",
      description:
        "Let’s collaborate! Contact me, UI/UX designer Hima Varsha, for product design, UX projects, collaborations, and creative digital design opportunities.",
      url: `${baseUrl}/connect`,
      type: "website",
      siteName: "Hima Varsha Portfolio",
      images: [{ url: "/assets/ogImages/Connect.png", width: 1200, height: 630, alt: "Connect with Hima Varsha" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Connect with Hima Varsha Barla | UI/UX Designer",
      description:
        "Let’s collaborate! Contact me, UI/UX designer Hima Varsha, for product design, UX projects, collaborations, and creative digital design opportunities.",
      images: ["/assets/ogImages/Connect.png"],
    },
    other: {
      "site_name": "Hima Varsha Portfolio",
    },
    icons: {
      icon: [
        { url: "/assets/icons/favicon.png" },
        { url: "/assets/icons/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/assets/icons/favicon.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/assets/icons/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/assets/icons/favicon.png"],
    },
  },
};
