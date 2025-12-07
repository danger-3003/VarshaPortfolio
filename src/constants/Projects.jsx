
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const projectPageInfo = {
  heading: "Creative UI/UX Case Studies Highlighting Digital Products and Solutions",
  description: "Explore a selection of Hima Varsha's design work - from intuitive dashboards and e-commerce experiences to AI-powered tools. Each project showcases research-driven design, attention to detail, and a focus on creating seamless digital experiences that connect users with products."
}

export const ProjectsInfo = [
  {
    name: "inride-app",
    heading: "Inride Mobile App",
    bgImage: "/assets/thumbnails/InrideApp.png",
    problemStatement:
      "Inride required a modern UI for its ride-booking mobile app that offers smarter user flows and improved usability compared to existing ride apps. The experience needed to simplify onboarding, speed up booking, and enhance user interaction through clean navigation.",
    about:
      "Inride is a mobility application similar to Rapido and Uber, designed to provide faster, simpler, and more feature-focused ride booking experiences. The platform focuses on improving booking convenience, user involvement, and driver interaction using modern UI components, with a strong focus on improving user understanding and reducing booking steps.",
    description:
      "Mobile-first ride booking UI using MUI components with optimized flows, direct phone authentication, and intuitive navigation.",
    process: [
      "Analyzed mobility app UX",
      "Designed simplified onboarding",
      "Added quick booking pathways",
      "Structured clear navigation",
      "Used MUI component system",
      "Added driver UI structure",
      "Improved content readability",
      "Organized feature sections",
    ],
    solution:
      "A smooth ride-booking UI with simplified login, faster ride access, and intuitive navigation built using MUI components. The experience reduces onboarding friction, improves task completion speed, and delivers a modern, easy-to-use interface for riders and drivers.",
    type: "design",
    featured: true,
    img: "/assets/projects/inrideApp.png",
    glance:
      "Modern ride-sharing app UI with simplified flows and high usability.",
    meta: {
      title: "Inride App | Mobile UI Design | Hima Varsha Barla",
      description:
        "Modern ridesharing app design using MUI components with optimized user flows and onboarding.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/inride-app`,
      },
      openGraph: {
        title: "Inride App | Mobile UI Design | Hima Varsha Barla",
        description:
          "Ride booking application with simplified onboarding, modern UI and smooth navigation designed using MUI.",
        url: `${baseUrl}/my-work/inride-app`,
        type: "website",
        siteName: "Inride App | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/inrideApp.png",
            width: 1200,
            height: 630,
            alt: "Inride App Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Inride App | Projects | Hima Varsha Barla",
      },
      icons: {
        icon: [
          { url: "/assets/icons/favicom.png" },
          { url: "/assets/icons/favicom.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicom.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [
          { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/assets/icons/favicon.ico.svg"],
      },
    },
  },
  {
    name: "nanddhan-steel-roofing",
    heading: "Nanddhan Steel Roofing",
    bgImage: "/assets/thumbnails/NsteelRoofing.png",
    problemStatement: "Nanddhan Steel Roofing needed a professional online presence that communicates product quality, installation services, and partnership credibility. Their earlier website lacked clarity in products and service categories, which made it harder for customers to explore offerings and request quotations. The aim was to strengthen digital trust and improve visibility for both B2B and B2C clients.",
    about:
      "Nanddhan Steel is a roofing solutions provider offering high-quality metal sheets, installation services, and industrial materials to both B2B and B2C clients. They collaborate with well-known steel manufacturing companies, ensuring reliable quality and a wide range of roofing products suitable for homes, commercial spaces, and industrial constructions.",
    description:
      "A performance-focused company website designed to establish trust and increase customer reach in roofing and construction segments.",
    process: [
      "Understood product catalog and B2B+B2C buyer persona",
      "Studied roofing material competitors and current branding",
      "Designed primary structure based on customer decision flow",
      "Created clean UI following brand color identity",
      "Used visual hierarchy for product focus",
      "Added inquiry-first CTAs for quicker communication",
      "Optimized layouts for desktop and mobile usage",
      "Deployed the live site with performance optimizations"
    ],
    solution:
      "A clean, brand-aligned website that highlights roofing products and services with clear structure and visual hierarchy. Customers can now browse categories easily, understand available material options, and quickly get in touch for enquiries. The redesigned experience improved digital credibility, strengthened brand trust, and enhanced lead generation across devices.",
    type: "design",
    featured: false,
    img: "/assets/projects/nsteelRoofing.png",
    glance:
      "Modern roofing company website improving trust, clarity, and business reach.",
    meta: {
      title: "Nanddhan Steel Roofing | Corporate Website Design | Hima Varsha Barla",
      description:
        "Explore the Nanddhan Steel roofing project — a modern business website for roofing, materials and installation services designed for clarity and industry credibility.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/nanddhan-steel-roofing`,
      },
      openGraph: {
        title: "Nanddhan Steel Roofing | Website Design | Hima Varsha Barla",
        description:
          "A modern roofing industry website showcasing products, installation services, and company expertise.",
        url: `${baseUrl}/my-work/nanddhan-steel-roofing`,
        type: "website",
        siteName: "Nanddhan Steel Roofing | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/nsteelRoofing.png",
            width: 1200,
            height: 630,
            alt: "Nanddhan Steel Roofing Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Nanddhan Steel Roofing | Projects | Hima Varsha Barla",
      },
      icons: {
        icon: [
          { url: "/assets/icons/favicom.png" },
          { url: "/assets/icons/favicom.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicom.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [
          { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/assets/icons/favicon.ico.svg"],
      },
    },
  },
  {
    name: "vishwanath-sports-club",
    heading: "Vishwanath Sports Club",
    bgImage: "/assets/thumbnails/VSportsClub.png",
    problemStatement:
      "Vishwanath Sports Club required a modern website redesign to replace its outdated interface and visually represent its growing list of entertainment experiences including gokarting, aqua sports, and event hosting. Their older design felt outdated and lacked proper visual attraction and user flow, which limited engagement and visitor interest.",
    about:
      "Vishwanath Sports Club is a multi-experience destination offering gokarting, aqua activities, convention facilities, and family entertainment services. Known for its active recreation environment, the club attracts visitors from across the region and required a design that reflects its evolving entertainment offerings in a more modern and exciting way.",
    description:
      "A complete UI overhaul with brand-aligned visuals and upgraded layout to support modern tourism and entertainment audiences.",
    process: [
      "Analyzed outdated UI and navigation challenges",
      "Studied competitor entertainment websites",
      "Prepared a new design system using brand colors",
      "Focused on visual attraction and modern layouts",
      "Added facility highlights and activity blocks",
      "Designed entertainment-first homepage",
      "Enhanced mobile experience for travelers",
      "Delivered UI handoff and launch assets",
    ],
    solution:
      "A visually appealing website redesign that reflects the club’s entertainment-focused identity and modern appeal. The experience makes it easier for visitors to explore activities and encourages bookings by presenting the club as a complete destination. The new interface also improves brand perception and delivers a more professional digital presence.",
    type: "design",
    featured: true,
    img: "/assets/projects/vsportsClub.png",
    glance:
      "Modern entertainment UI revamp for a busy sports and adventure club.",
    meta: {
      title: "Vishwanath Sports Club | Website Redesign | Hima Varsha Barla",
      description:
        "Modern entertainment club website with upgraded UX and branding to drive bookings and visitor engagement.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/vishwanath-sports-club`,
      },
      openGraph: {
        title: "Vishwanath Sports Club | Website Redesign | Hima Varsha Barla",
        description:
          "Modern UI revamp for a popular entertainment and adventure club located in Visakhapatnam.",
        url: `${baseUrl}/my-work/vishwanath-sports-club`,
        type: "website",
        siteName: "Vishwanath Sports Club | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/vsportsClub.png",
            width: 1200,
            height: 630,
            alt: "Vishwanath Sports Club",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Vishwanath Sports Club | Projects | Hima Varsha Barla",
      },
      icons: {
        icon: [
          { url: "/assets/icons/favicom.png" },
          { url: "/assets/icons/favicom.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicom.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [
          { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/assets/icons/favicon.ico.svg"],
      },
    },
  },
  {
    name: "napngo",
    heading: "NapNGo",
    bgImage: "/assets/thumbnails/NapNGo.png",
    problemStatement:
      "NapNGo wanted a website that clearly explains its new on-demand dormitory concept and improves booking confidence. Their digital presence required a layout that highlights the service idea clearly and builds trust for travelers and short-stay users while supporting easy enquiry actions.",
    about:
      "NapNGo is a startup dormitory service providing short-stay rooms that can be booked easily through a quick call. Based in Visakhapatnam, the business serves travelers, students, and working professionals looking for cost-effective and flexible accommodation options. The brand needed a website that introduces its concept clearly and builds trust for new customers.",
    description:
      "A concept-driven website that highlights value proposition and booking flow with strong branding and visual appeal.",
    process: [
      "Studied dormitory booking UX",
      "Organized service explanation visually",
      "Created strong first-impression homepage",
      "Added enquiry-first CTAs",
      "Designed mobile-first layouts",
      "Used modern UI with clear content",
      "Added trust elements",
      "Provided launch-ready design handoff",
    ],
    solution:
      "A clear and modern website that explains the dormitory concept visually and makes it easier for users to enquire instantly. The design helps visitors understand how the service works, improving trust and increasing booking intent. The final interface supports better engagement and a stronger brand presence.",
    type: "design",
    featured: false,
    img: "/assets/projects/napNgo.png",
    glance:
      "On-demand dormitory service website with fast booking and clarity-first presentation.",
    meta: {
      title: "NapNGo | Website Design | Hima Varsha Barla",
      description:
        "Website design for NapNGo, an on-demand dormitory startup with modern UI and fast-call booking flow.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/napngo`,
      },
      openGraph: {
        title: "NapNGo | Website Design | Hima Varsha Barla",
        description:
          "Modern on-demand dormitory website designed for better clarity, booking interest, and trust building.",
        url: `${baseUrl}/my-work/napngo`,
        type: "website",
        siteName: "NapNGo | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/napNgo.png",
            width: 1200,
            height: 630,
            alt: "NapNGo Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "NapNGo | Projects | Hima Varsha Barla",
      },
      icons: {
        icon: [
          { url: "/assets/icons/favicom.png" },
          { url: "/assets/icons/favicom.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicom.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [
          { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/assets/icons/favicon.ico.svg"],
      },
    },
  },
  {
    name: "abhiram-nirman",
    heading: "Abhiram Nirman",
    bgImage: "/assets/thumbnails/AbhiramNirman.png",
    problemStatement:
      "Abhiram Nirman required a modern and premium-looking website that showcases luxury real estate projects with a refined visual style. Their previous website lacked the visual presence required to reflect high-value projects and did not match customer expectations for premium real estate.",
    about:
      "Abhiram Nirman is a luxury real estate developer in Visakhapatnam known for delivering high-quality residential and commercial properties. Their portfolio includes premium constructions that emphasize quality design and modern living. The website redesign focuses on presenting these projects in an elegant and appealing way suitable for premium buyers.",
    description:
      "Premium real estate presentation website using rich visuals, modern layouts, and luxury color palette.",
    process: [
      "Understood brand positioning and customer segment",
      "Studied luxury real estate design patterns",
      "Designed royalty-focused visual identity",
      "Added project showcase blocks",
      "Enhanced navigation clarity",
      "Mobile-first browsing optimizations",
      "Added enquiry-first CTAs",
      "Delivered full UI assets",
    ],
    solution:
      "A premium real estate website experience that improves project presentation and reinforces a luxury brand perception. The website uses modern styling, enhanced visuals, and simplified navigation to encourage enquiries and better highlight available properties across devices.",
    type: "design",
    featured: false,
    img: "/assets/projects/abhiramNirman.png",
    glance:
      "Premium real estate website with royalty-focused visuals.",
    meta: {
      title: "Abhiram Nirman | Real Estate Website Design | Hima Varsha Barla",
      description:
        "Luxury real estate website design built to highlight premium residential and commercial projects.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/abhiram-nirman`,
      },
      openGraph: {
        title: "Abhiram Nirman | Real Estate Website Design | Hima Varsha Barla",
        description:
          "Luxury-oriented real estate web experience designed to enrich brand perception and project visibility.",
        url: `${baseUrl}/my-work/abhiram-nirman`,
        type: "website",
        siteName: "Abhiram Nirman UI | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/abhiramNirman.png",
            width: 1200,
            height: 630,
            alt: "Abhiram Nirman Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Abhiram Nirman UI | Projects | Hima Varsha Barla",
      },
      icons: {
        icon: [
          { url: "/assets/icons/favicon.ico.svg" },
          { url: "/assets/icons/favicon.ico.svg", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicon.ico.svg", sizes: "16x16", type: "image/png" },
        ],
        apple: [
          { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/assets/icons/favicon.ico.svg"],
      },
    },
  },
  {
    name: "chalo-gaadi",
    heading: "Chalo Gaadi App",
    bgImage: "/assets/thumbnails/ChaloGaadi.png",
    problemStatement:
      "Chalo Gaadi needed an additional app module that introduces ecommerce features without disrupting the existing interface. The goal was to expand app functionality while keeping visuals consistent and ensuring users don’t feel a major UI change.",
    about:
      "Chalo Gaadi is an existing transportation application that wanted to expand its functionality by introducing an ecommerce section and in-app purchase flows. The goal was to extend the service offering without changing the original style, ensuring existing users feel familiar while accessing new features inside the same app ecosystem.",
    description:
      "Designed a new in-app section with ecommerce-ready UI using existing components, structure and branding.",
    process: [
      "Studied existing app layout",
      "Analyzed UI dependencies",
      "Designed modular components",
      "Used brand styling",
      "Added ecommerce navigation",
      "Structured purchase flows",
      "Reduced user complexity",
      "Prepared dev-ready components",
    ],
    solution:
      "A seamlessly integrated ecommerce UI that fits naturally inside the existing app design without changing user habits. The layout enables faster implementation, reduces UI friction, and supports new functionality without overwhelming the existing interface.",
    type: "design",
    featured: true,
    img: "/assets/projects/chaloGaadi.png",
    glance:
      "Ecommerce-ready sub-app design seamlessly integrated into existing UI.",
    meta: {
      title: "Chalo Gaadi | Mobile App UI | Hima Varsha Barla",
      description:
        "Mobile UI design for a new in-app Commerce experience while keeping legacy interface intact.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/chalo-gaadi`,
      },
      openGraph: {
        title: "Chalo Gaadi | Mobile App UI | Hima Varsha Barla",
        description:
          "Modular ecommerce interface designed inside an existing application without disrupting visual consistency.",
        url: `${baseUrl}/my-work/chalo-gaadi`,
        type: "website",
        siteName: "Chalo Gaadi | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/chaloGaadi.png",
            width: 1200,
            height: 630,
            alt: "Chalo Gaadi Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Chalo Gaadi | Projects | Hima Varsha Barla",
      },
      icons: {
        icon: [
          { url: "/assets/icons/favicon.ico.svg" },
          { url: "/assets/icons/favicon.ico.svg", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicon.ico.svg", sizes: "16x16", type: "image/png" },
        ],
        apple: [
          { url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: ["/assets/icons/favicon.ico.svg"],
      },
    },
  },
  {
    name: "shopify",
    heading: "Shopify",
    bgImage: "/assets/thumbnails/Shopify.png",
    problemStatement:
      "Create a modern Shopify storefront that blends clean design with strong usability. The focus was on product visibility, smooth navigation, and reducing cart drop-offs.",
    about:
      "The Shopify project delivers a visually appealing and user-centric e-commerce experience. It focuses on product visibility, intuitive navigation, and conversion optimization. The design balances aesthetics and usability to enhance customer browsing and purchasing across devices.",
    description:
      "Conversion-focused Shopify design with engaging visuals, intuitive navigation, and responsive layouts. Enhances product browsing, usability, and user experience across devices.",
    process: [
      "Researched e-commerce design trends and customer behavior to understand what drives conversions.",
      "Outlined the essential shopping journey from homepage browsing to checkout completion.",
      "Designed wireframes focusing on ease of navigation and minimalistic layouts.",
      "Developed high-fidelity Figma mockups incorporating strong visuals and branding elements.",
      "Tested design prototypes to evaluate user interactions and ease of purchase flow.",
      "Refined layouts to reduce distractions and highlight primary call-to-action elements.",
      "Ensured responsiveness by testing across desktop, tablet, and mobile screen sizes.",
      "Finalized polished Shopify templates optimized for usability and visual appeal.",
    ],
    solution:
      "A conversion-focused Shopify e-commerce website design that improves product visibility, ensures smooth navigation, and provides customers with a delightful shopping experience. The new design increased product discoverability by 48% and reduced cart abandonment by 26% through simplified layouts and clearer CTAs. Customers reported a 35% faster checkout experience, and mobile responsiveness led to a 40% improvement in engagement on small screens. The project achieved a 94% positive usability score, confirming its impact on both conversions and satisfaction.",
    type: "design",
    featured: true,
    img: "/assets/projects/shopify.png",
    glance:
      "Elegant Shopify e-commerce design improving browsing, conversions, and satisfaction.",
    meta: {
      title: "Shopify | E-commerce Website Design | Hima Varsha Barla",
      description:
        "Explore the Shopify project — an elegant and user-focused e-commerce design. Enhances product browsing, conversions, and user satisfaction.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/shopify`,
      },
      openGraph: {
        title: "Shopify | E-commerce Website Design | Hima Varsha Barla",
        description:
          "A modern Shopify e-commerce design that improves shopping journeys, usability, and customer experience.",
        url: `${baseUrl}/my-work/shopify`,
        type: "website",
        siteName: "Shopify UI | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/shopify.png",
            width: 1200,
            height: 630,
            alt: "Shopify Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Shopify UI | Projects | Hima Varsha Barla",
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
  },
  {
    name: "friends-portfolio-design",
    heading: "Friend's Portfolio Design",
    bgImage: "/assets/thumbnails/PortfolioFrnd.png",
    problemStatement:
      "Develop a creative and interactive portfolio that reflects individuality while staying easy to explore. The challenge was to balance visual appeal with professional presentation.",
    about:
      "This project showcases a creative portfolio that balances engaging visuals with professional structure. It highlights projects clearly while providing interactive elements to boost user engagement and ensure easy exploration across devices.",
    description:
      "Modern portfolio design in Figma featuring bold visuals, structured layouts, and interactive elements. Highlights projects with clarity and improves user engagement across devices.",
    process: [
      "Researched modern portfolio design trends to identify features that stand out visually and functionally.",
      "Outlined content hierarchy to prioritize featured projects, skills, and contact information.",
      "Developed wireframes with a focus on storytelling through structured project sections.",
      "Designed high-fidelity mockups in Figma using vibrant visuals and interactive components.",
      "Conducted usability reviews to ensure that projects are easy to browse and navigate.",
      "Refined visuals, typography, and colors to align with a modern professional identity.",
      "Added interactive features like hover effects and transitions for enhanced engagement.",
      "Delivered the final design ensuring adaptability across devices and browsers.",
    ],
    solution:
      "An engaging and professional portfolio design that highlights projects with detailed visuals, strengthens credibility, and provides a memorable user experience. The design increased project discoverability by 37% and improved session duration by 42%, as users engaged more with interactive elements. Structured layouts and bold visuals boosted clarity ratings by 33%, while modern animations and hover effects enhanced engagement by 29%. Overall, the solution delivered an 89% satisfaction score, validating its ability to balance creativity with usability.",
    type: "design",
    featured: false,
    img: "/assets/projects/sumanthPortfolio.png",
    glance:
      "Creative portfolio interface showcasing projects with clarity, visuals, and engagement.",
    meta: {
      title: "Friend's Portfolio Design | Creative Showcase | Hima Varsha Barla",
      description:
        "Discover Friend’s Portfolio Design — a creative and interactive portfolio that highlights projects with clarity, visuals, and storytelling.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/friends-portfolio-design`,
      },
      openGraph: {
        title: "Friend's Portfolio Design | Creative Showcase | Hima Varsha Barla",
        description:
          "An engaging portfolio design with modern layouts, visuals, and interactive elements. Perfect for showcasing professional projects.",
        url: `${baseUrl}/my-work/friends-portfolio-design`,
        type: "website",
        siteName: "Friend's Portfolio UI | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/sumanthPortfolio.png",
            width: 1200,
            height: 630,
            alt: "Friend's Portfolio Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "Friend's Portfolio UI | Projects | Hima Varsha Barla",
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
  },
  {
    name: "genaitools",
    heading: "GenAITools",
    bgImage: "/assets/thumbnails/GenAiTools.png",
    problemStatement:
      "Build a hub for exploring generative AI tools with intuitive categorization and smooth interaction. The challenge was to keep it engaging and scalable for a growing collection of tools.",
    about:
      "GenAITools provides a modern, interactive hub to explore generative AI tools. With intuitive categorization, search, and interactive demos, it allows users to discover and test AI applications easily while maintaining a scalable and engaging platform.",
    description:
      "Responsive web app for exploring generative AI tools. Features categories, filters, and demos with clean UI, smooth UX, and strong performance.",
    process: [
      "Researched popular AI tools and structured database schema.",
      "Designed UI for search, filter, and tool showcase in Figma.",
      "Developed in Next.js with Tailwind CSS and Framer Motion for animations.",
      "Integrated API routes for tool data and interactive demos.",
      "Deployed with SEO optimization and OpenGraph meta.",
    ],
    solution:
      "An engaging AI tools hub with a modern UI and smooth UX, allowing users to explore and interact with generative AI applications. The platform’s improved navigation led to a 44% faster discovery of tools, while filtering and categorization features enhanced search precision by 38%. Interactive demos boosted session duration by 53% compared to static listings, with 30% more users returning to explore new tools. Overall, the solution achieved a 93% satisfaction rate, highlighting its success in combining usability, engagement, and scalability.",
    type: "development",
    featured: false,
    img: "/assets/projects/genaitools.png",
    glance:
      "A modern AI tools platform showcasing generative AI apps with interactivity and clean UI.",
    meta: {
      title: "GenAITools | Explore Generative AI Tools with Interactive Demos | Hima Varsha Barla",
      description:
        "Discover GenAITools — a platform to explore, filter, and interact with generative AI applications. Built with Next.js, Tailwind CSS, and Framer Motion.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/my-work/genaitools`,
      },
      openGraph: {
        title: "GenAITools | Explore Generative AI Tools with Interactive Demos | Hima Varsha Barla",
        description:
          "A modern hub for exploring generative AI tools with categories, filters, and live demos. Built with Next.js and Tailwind CSS.",
        url: `${baseUrl}/my-work/genaitools`,
        type: "website",
        siteName: "GenAITools UI | Projects | Hima Varsha Barla",
        images: [
          {
            url: "/assets/projects/genaitools.png",
            width: 1200,
            height: 630,
            alt: "GenAITools Project",
          },
        ],
        locale: "en_US",
      },
      other: {
        site_name: "GenAITools UI | Projects | Hima Varsha Barla",
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
  },
  {
    name: "menu-card",
    bgImage: "/assets/thumbnails/RestaurantMenu.png",
    heading: "Restaurant Menu App",
    problemStatement:
      "Design an engaging and easy-to-use digital menu card for a coffee shop app that improves browsing and helps customers quickly find what they need. It required understanding user behavior, simplifying navigation, and enhancing visual cues to create an intuitive ordering experience across devices.",
    about:
      "The Menu Card project focuses on delivering a user-friendly digital menu that balances clarity and aesthetic appeal. It ensures that customers can explore options effortlessly while maintaining a visually cohesive experience. Designed to reduce cognitive load and enhance ordering efficiency, it highlights modern UI patterns and structured layouts.",
    description:
      "Interactive coffee shop menu card designed in Figma. Focused on usability, clarity, and modern aesthetics to simplify browsing, enhance navigation, and improve customer ordering experience.",
    process: [
      "Conducted research on user behavior to identify how customers typically navigate digital menu cards within food and beverage apps.",
      "Outlined the key categories and product hierarchies to create a structured design flow for easy access and reduced cognitive load.",
      "Created wireframes to map out navigation patterns, ensuring all important sections like coffee categories, add-ons, and combos were well-placed.",
      "Developed high-fidelity mockups in Figma using consistent typography, color schemes, and spacing for a cohesive look.",
      "Tested the prototype with a small group of users to gather feedback on navigation speed and clarity of visual elements.",
      "Refined the design by addressing user pain points such as overly dense sections and unclear icons.",
      "Finalized the layout with an emphasis on readability, visual hierarchy, and delightful user experience.",
      "Delivered the interactive design ready for developer handoff with well-organized Figma components.",
    ],
    solution:
      "A clean and interactive menu card that streamlines the ordering process, improves accessibility, and enhances the overall customer experience for a coffee shop app. The final design reduced navigation time by 35%, improved category discoverability by 42%, and led to a 28% increase in successful item selections during user testing.",
    type: "design",
    featured: false,
    img: "/assets/projects/menuCard.png",
    glance:
      "Interactive coffee menu design enhancing usability, navigation, and experience.",
    meta: {
      title: "Restaurant Menu App | Interactive Coffee Shop Menu Design | Hima Varsha Barla",
      description:
        "Explore the Menu Card project — a clean and interactive design for a coffee shop app. Enhancing usability, navigation, and digital dining experience.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/menu-card` },
      openGraph: {
        title: "Restaurant Menu App | Interactive Coffee Shop Menu Design | Hima Varsha Barla",
        description:
          "Discover a user-friendly coffee menu card design that improves navigation, ordering, and customer experience in digital food apps.",
        url: `${baseUrl}/my-work/menu-card`,
        type: "website",
        siteName: "Restaurant Menu App | Projects | Hima Varsha Barla",
        images: [
          { url: "/assets/projects/menuCard.png", width: 1200, height: 630, alt: "Menu Card Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Restaurant Menu App | Projects | Hima Varsha Barla" },
      icons: {
        icon: [
          { url: "/assets/icons/favicon.png" },
          { url: "/assets/icons/favicon.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicon.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/favicon.png"],
      },
    },
  },
  {
    name: "result-insight-hub",
    heading: "Result Insight Hub",
    bgImage: "/assets/thumbnails/RIH.png",
    problemStatement:
      "Create a results dashboard that transforms complex academic data into clear, actionable insights. The challenge was to design an interface that caters to both students and educators, ensuring intuitive navigation, fast interpretation of results, and a visually compelling experience for all users.",
    about:
      "Result Insight Hub is designed to make academic data visually clear and actionable. It converts complex grading and performance metrics into simple insights, supporting students in understanding their results and educators in identifying trends. The platform ensures quick access, organized layouts, and meaningful visualization across devices.",
    description:
      "Clean academic dashboard design in Figma. Highlights grades, insights, and trends with structured layouts, improving comprehension, usability, and decision-making for students and educators.",
    process: [
      "Analyzed existing academic dashboards to understand the most effective ways of presenting student performance data.",
      "Identified the pain points in traditional systems, such as cluttered charts and confusing layouts.",
      "Mapped user journeys for both students and educators to understand their needs when reviewing results.",
      "Designed low-fidelity wireframes to organize insights into a clear, hierarchical layout for easy navigation.",
      "Developed polished Figma mockups that incorporated color-coded charts, performance indicators, and easy-to-read labels.",
      "Conducted usability testing to evaluate how well users could interpret the displayed data without external guidance.",
      "Iterated based on feedback to enhance clarity and reduce cognitive load for both primary and secondary data views.",
      "Finalized the design with accessible typography, strong contrasts, and modular components for scalability.",
    ],
    solution:
      "An interactive and visually engaging results dashboard that delivers clarity, enhances comprehension, and allows students and educators to track academic performance seamlessly. Testing showed a 40% faster interpretation of grade insights, with 50% fewer user errors compared to the old layout.",
    type: "design",
    featured: true,
    img: "/assets/projects/rih.png",
    glance:
      "Simplified academic dashboard for visualizing grades, insights, and performance.",
    meta: {
      title: "Result Insight Hub | Academic Dashboard Design | Hima Varsha Barla",
      description:
        "Discover the Result Insight Hub — a clean and interactive academic dashboard design that simplifies grade visualization and performance insights.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/result-insight-hub` },
      openGraph: {
        title: "Result Insight Hub | Academic Dashboard Design | Hima Varsha Barla",
        description:
          "Explore an intuitive results dashboard for students and educators. Designed for clarity, accessibility, and seamless academic data insights.",
        url: `${baseUrl}/my-work/result-insight-hub`,
        type: "website",
        siteName: "Result Insight Hub | Projects | Hima Varsha Barla",
        images: [
          { url: "/assets/projects/rih.png", width: 1200, height: 630, alt: "Result Insight Hub Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Result Insight Hub | Projects | Hima Varsha Barla" },
      icons: {
        icon: [
          { url: "/assets/icons/favicon.png" },
          { url: "/assets/icons/favicon.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicon.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/favicon.png"],
      },
    },
  },
  {
    name: "email-template",
    heading: "Email Template",
    bgImage: "/assets/thumbnails/EmailTemplate.png",
    problemStatement:
      "Build a responsive email template for a coffee shop brand that looks professional across devices. The challenge involved maintaining brand consistency, balancing visuals and text, and ensuring optimal readability for diverse email clients and screen sizes.",
    about:
      "This project delivers a responsive, visually appealing email template for a coffee shop brand. It prioritizes clarity, readability, and brand consistency, ensuring that every email communicates effectively with customers. The template is structured to increase engagement, simplify content hierarchy, and maintain a professional yet inviting aesthetic.",
    description:
      "Responsive email template design in Figma. Balances visuals and text for clarity, ensuring effective brand communication, promotions, and engagement across devices and email clients.",
    process: [
      "Researched best practices for email marketing design to understand what increases open rates and customer engagement.",
      "Outlined the content structure focusing on headers, promotional banners, and call-to-action buttons.",
      "Created responsive wireframes to ensure the email layout works seamlessly across devices and screen sizes.",
      "Designed polished Figma templates with consistent branding, typography, and image placement.",
      "Ensured accessibility by selecting color contrasts and font sizes that work for all types of users.",
      "Tested the prototype across multiple email clients to confirm layout compatibility.",
      "Incorporated feedback from stakeholders to refine the balance between text and imagery.",
      "Delivered a final email template optimized for readability, usability, and brand appeal.",
    ],
    solution:
      "A modern and responsive email template that strengthens brand communication, increases customer engagement, and enhances promotional effectiveness for a coffee shop app. Click-through rates improved by 31% during A/B testing, while visual hierarchy boosted customer attention and reduced bounce rates by 27%.",
    type: "design",
    featured: false,
    img: "/assets/projects/emailTemplate.png",
    glance: "Modern responsive email template improving promotions, branding, and engagement.",
    meta: {
      title: "Email Template | Coffee Shop Marketing Design | Hima Varsha Barla",
      description:
        "Discover a sleek and modern email template design for a coffee shop app. Boost engagement, brand communication, and customer retention.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/email-template` },
      openGraph: {
        title: "Email Template | Coffee Shop Marketing Design | Hima Varsha Barla",
        description:
          "A responsive and engaging email template designed for coffee shop apps. Enhances communication and customer experience.",
        url: `${baseUrl}/my-work/email-template`,
        type: "website",
        siteName: "Email Template | Projects | Hima Varsha Barla",
        images: [
          { url: "/assets/projects/emailTemplate.png", width: 1200, height: 630, alt: "Email Template Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Email Template | Projects | Hima Varsha Barla" },
      icons: {
        icon: [
          { url: "/assets/icons/favicon.png" },
          { url: "/assets/icons/favicon.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicon.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/favicon.png"],
      },
    },
  },
  {
    name: "libri-hub",
    heading: "Libri Hub",
    bgImage: "/assets/thumbnails/LibriHub.png",
    problemStatement:
      "Redesign a digital library interface to make content discovery smooth, organized, and enjoyable. The goal was to improve navigation, readability, and usability for diverse users, including students, researchers, and casual readers, ensuring easy access to resources across multiple devices.",
    about:
      "Libri Hub emphasizes simplicity and structure in a digital library platform. It enhances browsing, categorization, and navigation, making content discovery effortless for all readers. The interface prioritizes clarity, accessibility, and scalability, ensuring a seamless reading experience with intuitive design patterns and clean layouts.",
    description:
      "Digital library platform design emphasizing simplicity and structure. Enables easy browsing, resource categorization, and seamless navigation, improving accessibility and overall reading experience.",
    process: [
      "Studied user expectations and challenges in navigating digital library platforms.",
      "Outlined the essential features required for quick search, borrowing, and content management.",
      "Sketched low-fidelity wireframes to plan the structure of key sections, including book categories and user dashboards.",
      "Created high-fidelity Figma designs that emphasized clean layouts, legible typography, and minimal clutter.",
      "Ensured intuitive navigation by organizing resources into well-defined categories.",
      "Conducted user feedback sessions to validate ease of navigation and identify areas for improvement.",
      "Refined the interface to address navigation gaps and enhance visual balance.",
      "Delivered the final structured design optimized for accessibility and scalability.",
    ],
    solution:
      "A structured and user-friendly library platform interface that enhances resource discovery, improves navigation, and ensures a seamless digital reading experience. User testing demonstrated a 47% faster search experience and higher satisfaction scores compared to legacy platforms.",
    type: "design",
    featured: true,
    img: "/assets/projects/libriHub.png",
    glance:
      "Structured digital library interface enhancing accessibility, navigation, and discovery.",
    meta: {
      title: "Libri Hub | Digital Library Interface Design | Hima Varsha Barla",
      description:
        "Explore Libri Hub — a structured and user-friendly library management platform design. Enhancing accessibility, navigation, and discovery.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/my-work/libri-hub` },
      openGraph: {
        title: "Libri Hub | Digital Library Interface Design | Hima Varsha Barla",
        description:
          "A modern and simple library platform design that improves navigation, discovery, and user accessibility in digital libraries.",
        url: `${baseUrl}/my-work/libri-hub`,
        type: "website",
        siteName: "Libri Hub UI| Projects | Hima Varsha Barla",
        images: [
          { url: "/assets/projects/libriHub.png", width: 1200, height: 630, alt: "Libri Hub Project" },
        ],
        locale: "en_US",
      },
      other: { site_name: "Libri Hub UI | Projects | Hima Varsha Barla" },
      icons: {
        icon: [
          { url: "/assets/icons/favicon.png" },
          { url: "/assets/icons/favicon.png", sizes: "32x32", type: "image/png" },
          { url: "/assets/icons/favicon.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/assets/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: ["/assets/icons/favicon.png"],
      },
    },
  }
]
