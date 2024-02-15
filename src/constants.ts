import XIcon from "./components/icons/XIcon.astro";
import GitHubIcon from "./components/icons/GitHubIcon.astro";
import LinkedInIcon from "./components/icons/LinkedInIcon.astro";
import ThreadsIcon from "./components/icons/ThreadsIcon.astro";

export const projects = [
  {
    title: "Mirror of Loss",
    description: "An AI powered WebGL experience.",
    builtWith: [
      "React Three Fiber",
      "Supabase",
      "Stable Diffusion",
      "Stable Audio",
    ],
    links: [
      { name: "mirrorofloss.com", url: "https://mirrorofloss.com" },
      { name: "Source code", url: "https://github.com/laznic/mirror-of-loss" },
    ],
    award: {
      name: "Supabase Hackathon: Most visually pleasing",
      url: "https://supabase.com/blog/launch-week-x-hackathon-winners#:~:text=to%20UI%20views.-,Most%20visually%20pleasing,-Winner",
      position: 1,
    },
  },
  {
    title: "Doors of Abyss: The Endless Chase",
    description: "An interactive, narrative browser game.",
    builtWith: ["React", "Supabase", "Stable Diffusion", "Open AI"],
    links: [
      { name: "doorsofabyss.com", url: "https://doorsofabyss.com" },
      { name: "Source code", url: "https://github.com/laznic/doors-of-abyss" },
    ],
    award: {
      name: "Supabase Hackathon: Most visually pleasing",
      url: "https://supabase.com/blog/launch-week-8-hackathon-winners#:~:text=on%20Cloudflare%20pages.-,Most%20visually%20pleasing,-Winner",
      position: 1,
    },
  },
  {
    title: "Generation: Hotdog",
    description: "A hot dog experience, powered by AI.",
    builtWith: ["React", "Supabase", "Stable Diffusion", "Open AI"],
    links: [
      { name: "generationhotdog.com", url: "https://generationhotdog.com" },
      {
        name: "Source code",
        url: "https://github.com/laznic/generation-hotdog",
      },
    ],
    award: {
      name: "Supabase Hackathon: Most visually pleasing",
      url: "https://supabase.com/blog/launch-week-7-hackathon-winners#:~:text=Macos%20and%20web.-,Most%20visually%20pleasing,-Winner",
      position: 1,
    },
  },
  {
    title: "That Hot Dog Game",
    description: "A hot dog eating game using webcams.",
    builtWith: ["React", "Supabase"],
    links: [{ name: "Source code", url: "https://github.com/laznic/hotdogs" }],
    award: {
      name: "Supabase Hackathon: Most fun/interesting",
      url: "https://supabase.com/blog/launch-week-5-hackathon-winners#:~:text=using%20Edge%20Functions.-,Most%20Fun/Interesting,-Winner",
      position: 1,
    },
  },
  {
    title: "AI Coloring book",
    description: 'A digital "coloring book" app powered by an AI.',
    builtWith: ["Elixir/Phoenix", "Supabase", "Stable Diffusion", "Replicate"],
    links: [
      { name: "maicanvas.com", url: "https://maicanvas.com" },
      { name: "Source code", url: "https://github.com/laznic/coloring-book" },
    ],
  },
  {
    title: "Quickplay",
    description: "An automated tournament platform that runs on Discord.",
    builtWith: ["Hapi.js", "Supabase"],
    links: [{ name: "quickplay.co", url: "https://quickplay.co" }],
  },
];

export const inProgress = [
  { category: "reading", title: "1984" },
  { category: "reading", title: "Musashi" },
  { category: "learning", title: "Elixir" },
  { category: "learning", title: "WebGL" },
  { category: "learning", title: "Game Development" },
  { category: "playing", title: "Baldur's Gate 3" },
  { category: "building", title: "This website" },
  { category: "building", title: "Untitled game project" },
  { category: "building", title: "Untitled brand project" },
];

export const socials = [
  {
    name: "Twitter",
    url: "https://twitter.com/laznic",
    icon: XIcon,
  },
  {
    name: "Threads",
    url: "https://threads.net/niklas.lepisto.co",
    icon: ThreadsIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/laznic",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/niklaslepisto/",
    icon: LinkedInIcon,
  },
];
