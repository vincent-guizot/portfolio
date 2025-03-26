import { Home, Briefcase, Layers, Award, Image, Mail } from "lucide-react";

const menus = [
  {
    name: "Home",
    url: "/",
    icon: Home,
  },
  {
    name: "Portfolio",
    url: "/portfolios/projects",
    icon: Briefcase,
  },
  {
    name: "Experience",
    url: "/experiences/works",
    icon: Layers,
  },
  {
    name: "Award",
    url: "/awards",
    icon: Award,
  },
  {
    name: "Gallery",
    url: "/galleries",
    icon: Image,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: Mail,
  },
];

const projects = [
  {
    id: "1",
    name: "Protein Shack",
    image: [
      "https://placehold.co/500",
      "https://placehold.co/500",
      "https://placehold.co/500",
    ],
    description:
      "Lorem ipsum is a dummy text, vmkDgflmznlkvnemflMNDvjcn, .naoifeD",
    date: "2025-03-25",
  },
  {
    id: "2",
    name: "Sadino Technology",
    image: [
      "https://placehold.co/500",
      "https://placehold.co/500",
      "https://placehold.co/500",
    ],
    description:
      "Lorem ipsum is a dummy text, vmkDgflmznlkvnemflMNDvjcn, .naoifeD",
    date: "2025-03-25",
  },
  {
    id: "3",
    name: "Warnaloka",
    image: [
      "https://placehold.co/500",
      "https://placehold.co/500",
      "https://placehold.co/500",
    ],
    description:
      "Lorem ipsum is a dummy text, vmkDgflmznlkvnemflMNDvjcn, .naoifeD",
    date: "2025-03-25",
  },
  {
    id: "4",
    name: "Hotel D'Grande",
    image: [
      "https://placehold.co/500",
      "https://placehold.co/500",
      "https://placehold.co/500",
    ],
    description:
      "Lorem ipsum is a dummy text, vmkDgflmznlkvnemflMNDvjcn, .naoifeD",
    date: "2025-03-25",
  },
  {
    id: "5",
    name: "Stream",
    image: [
      "https://placehold.co/500",
      "https://placehold.co/500",
      "https://placehold.co/500",
    ],
    description:
      "Lorem ipsum is a dummy text, vmkDgflmznlkvnemflMNDvjcn, .naoifeD",
    date: "2025-03-25",
  },
];

export { menus, projects };
