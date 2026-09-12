export type ProjectCategory = "React" | "Next.js" | "React Native" | "Flutter";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  preview: string;
  image?: string;
  screenshots?: { src: string; caption: string; orientation?: "portrait" | "landscape" }[];
  category: ProjectCategory;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dynamics-ai",
    title: "Dynamics AI",
    summary:
      "AI-powered mobile assistant app that captures spoken input and converts it into meaningful, structured information.",
    problem:
      "Users often struggle to quickly convert raw voice notes into actionable, organized data for everyday productivity workflows.",
    solution:
      "Built a Flutter-based mobile experience that processes spoken input and returns structured outputs designed for practical use and faster decisions.",
    features: [
      "Voice input capture and processing flow",
      "Intent-aware output formatting",
      "Clean mobile-first UI for quick interactions",
      "APK distribution-ready build",
    ],
    preview:
      "Mobile assistant interface focused on voice capture and structured AI responses.",
    image: "/projects/Dynamics-ai.webp",
    screenshots: [
      { src: "/projects/Dynamics-ai.webp", caption: "Dynamics AI — Central hub highlighting the intelligent voice tracking.", orientation: "landscape" },
      { src: "/projects/dynamics-1.jpeg", caption: "Splash Screen — The clean, welcoming and fast initial launch sequence.", orientation: "portrait" },
      { src: "/projects/dynamics-2.jpeg", caption: "Light Mode — A bright, user-friendly chat interface for daytime visibility.", orientation: "portrait" },
      { src: "/projects/dynamics-3.jpeg", caption: "Dark Mode — Sleek, high-contrast theme optimized for reduced eye strain.", orientation: "portrait" },
      { src: "/projects/dynamics-4.jpeg", caption: "Voice Settings — Configuration panel to natively adjust speech rate and pitch.", orientation: "portrait" },
    ],
    category: "Flutter",
    tech: ["AI Voice Processing", "Mobile UI", "API Integration"],
    links: {
      github: "https://github.com/bolajidavid25/Dynamics-Ai",
      live: "https://drive.google.com/file/d/166GO-3C7lIC1OlNaZY7NI9B8ZH7Db14p/view?usp=drive_link",
    },
    featured: true,
  },
  {
    slug: "connevo",
    title: "Connevo",
    summary:
      "A premium Flutter communication platform with real-time messaging, multimedia sharing, and ZegoCloud audio/video calling.",
    problem:
      "Most mobile chat apps miss enterprise-grade media handling, live call quality, and a polished, state-driven user experience.",
    solution:
      "Created Connevo as a cross-platform Flutter app using Firebase for realtime chat and ZegoCloud for low-latency voice/video conferencing.",
    features: [
      "Real-time chat with reliable Firestore delivery states",
      "High-fidelity audio and video calling via ZegoCloud",
      "Image and document sharing with optimized storage",
      "Live typing indicators and presence-aware status updates",
      "Riverpod state management for scalable app flow",
    ],
    preview: "Connevo mobile interface with chat, multimedia sharing, and live call readiness.",
    image: "/projects/connevo.png",
    screenshots: [
      { src: "/projects/connevo/connevo-3.png", caption: "Splash screen — The clean, welcoming initial launch sequence for Connevo.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-9.png", caption: "Sign Up screen — Simple user registration flow for creating a new account.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-6.png", caption: "Login screen — Secure and quick access for returning users to connect seamlessly.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-2.png", caption: "Profile screen — Intuitive interface for users to manage their account information.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-1.png", caption: "Message screen — Central hub displaying all active peer-to-peer and group conversations.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-4.png", caption: "Chat screen — Real-time 1-on-1 messaging interface with typing indicators and timestamps.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-5.png", caption: "Group chat screen — Seamless multi-user communication channel for team collaboration.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-8.png", caption: "New chat screen — A structured contact list letting users easily start new private conversations.", orientation: "portrait" },
      { src: "/projects/connevo/connevo-7.png", caption: "New Group screen — Simple participant selection interface for fast group creation.", orientation: "portrait" },
    ],
    category: "Flutter",
    tech: ["Firebase", "Riverpod", "ZegoCloud", "WebRTC"],
    links: {
      github: "https://github.com/bolajidavid25/Connevo",
      live: "https://drive.google.com/file/d/1N_Cf9IRcJvKyjIYERccuWGhaLglRyrPj/view?usp=sharing",
    },
    featured: true,
  },
  {
    slug: "portfolio-next-tailwind",
    title: "Portfolio Website",
    summary:
      "Conversion-focused developer portfolio with case-study storytelling and strong CTAs.",
    problem:
      "Generic portfolio sites fail to communicate value, proof of work, and a clear hiring call-to-action.",
    solution:
      "Designed a structured content system with stronger messaging, featured case studies, and recruiter-friendly sections.",
    features: [
      "Section-based storytelling for hiring",
      "Responsive UI with subtle motion",
      "Project case studies and tech filters",
      "Contact flow with social and email CTAs",
    ],
    preview: "Desktop portfolio hero section with highlighted stack and call-to-action.",
    category: "Next.js",
    tech: ["Tailwind CSS", "Framer Motion", "Vercel"],
    links: {
      github: "https://github.com/your-username/portfolio",
      live: "https://example.com",
    },
    featured: true,
  },
  {
    slug: "await-apartment",
    title: "Await Apartment",
    summary:
      "Premium real estate landing page designed to present apartment listings through a fast, responsive, and visually engaging experience.",
    problem:
      "Real estate brands need a polished digital presence that makes properties easy to discover while keeping the browsing experience quick and accessible.",
    solution:
      "Built a responsive React landing page with Tailwind CSS and Framer Motion to create a refined property-focused experience with smooth interactions.",
    features: [
      "Responsive real estate landing page",
      "Property-focused visual presentation",
      "Smooth Framer Motion interactions",
      "Fast, mobile-friendly browsing experience",
    ],
    preview: "Premium apartment landing page with responsive layouts and animated interactions.",
    category: "React",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/bolajidavid25/Await-Apartment-",
    },
    featured: true,
  },
  {
    slug: "dons-farm-management",
    title: "Dons Farm",
    summary:
      "Farm operations dashboard for managing inventory, tasks, and field-level reporting.",
    problem:
      "Small farm teams struggle with manual tracking, causing delays and poor visibility in day-to-day operations.",
    solution:
      "Built a centralized dashboard that tracks operations, inventory movement, and simple analytics for better planning.",
    features: [
      "Inventory and stock activity tracking",
      "Task board for farm operations",
      "Simple analytics widgets for decisions",
      "Role-based access-ready architecture",
    ],
    preview: "Analytics dashboard preview with farm inventory charts and task modules.",
    image: "/projects/dons-farm.png",
    screenshots: [{ src: "/projects/dons-farm.png", caption: "Dashboard overview" }],
    category: "React",
    tech: ["Tailwind CSS", "Firebase", "Charts"],
    links: {
      github: "",
      live: "https://donsfarm.com.ng",
    },
    featured: true,
  },
];

