import { TileSet } from "@/app/lib/declarations";
import {
  SiInstagram,
  SiSnapchat,
  SiDiscord,
  SiThreads,
  SiFacebook,
  SiLinkedin,
  SiGithub,
  SiProtonmail,
} from "react-icons/si";

import { FaPhone } from "react-icons/fa";

const tilesets: TileSet[] = [
  {
    title: "Socials",
    tiles: [
      {
        name: "Instagram",
        url: "https://instagram.com/actuallyatiger",
        icon: SiInstagram,
      },
      {
        name: "Snapchat",
        url: "https://snapchat.com/add/possiblyatiger",
        icon: SiSnapchat,
      },
      {
        name: "Discord",
        url: "https://discord.gg/actuallyatiger",
        icon: SiDiscord,
      },
      {
        name: "Threads",
        url: "https://threads.net/@actuallyatiger",
        icon: SiThreads,
      },
      {
        name: "Facebook",
        url: "https://facebook.com/possiblyatiger",
        icon: SiFacebook,
      },
    ],
  },
  {
    title: "Professional",
    tiles: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/tiger-taylor",
        icon: SiLinkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: SiGithub,
      },
      {
        name: "Email",
        url: "mailto:tiger@tigertaylor.xyz",
        icon: SiProtonmail,
      },
      {
        name: "Phone",
        url: "tel:+44 7496 588340",
        icon: FaPhone,
      },
    ],
  },
];

export default tilesets;
