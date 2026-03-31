export type NavItem = {
  title: string;
  href: string;
  description: string;
  enabled: boolean;
};

export const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    description: "Main dashboard home.",
    enabled: true,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    description: "User management module.",
    enabled: false,
  },
  {
    title: "Groups",
    href: "/dashboard/groups",
    description: "Study groups and permissions.",
    enabled: false,
  },
  {
    title: "Library",
    href: "/dashboard/library",
    description: "Digital library moderation.",
    enabled: false,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    description: "Flags and moderation queue.",
    enabled: false,
  },
];
