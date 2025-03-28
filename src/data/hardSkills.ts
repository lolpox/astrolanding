interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Shopify",
    description: "My go-to eCommerce platform for building scalable and high-performing online stores",
    icon: "shopify_glyph"
  },
  {
    name: "Wordpress",
    description: "My favorite CMS for creating dynamic and customizable websites",
    icon: "wordpress"
  },
  {
    name: "Figma",
    description: "My preferred design tool for crafting seamless UI/UX experiences",
    icon: "figma"
  },
  {
    name: "React",
    description: "My favorite JavaScript library for building interactive and modern web applications",
    icon: "react"
  }
];

export default hardSkills;