const items = [
  {
    key: "1",
    label: "Home",
    href: "/",
    children: [
      {
        key: "1-1",
        label: "nav 1-1",
      },
      {
        key: "1-2",
        label: "nav 1-2",
      },
      {
        key: "1-3",
        label: "nav 1-3",
      },
    ],
  },
  {
    key: "2",
    label: "Find Mentors",
    href: "/mentors",
  },
  // {
  //   key: "9",
  //   label: "Resources",
  //   href: "/resources",
  //   to: "/resources",
  // },
  {
    key: "7",
    label: "About Us",
    href: "/about",
    children: [
      {
        key: "2-1",
        label: "nav 2-1",
      },
      {
        key: "2-2",
        label: "nav 2-2",
      },
      {
        key: "2-3",
        label: "nav 2-3",
      },
    ],
  },
  {
    key: "3",
    label: "Our Services",
    href: "/services",
    to: "/services",
  },
  {
    key: "4",
    label: "Our Team",
    href: "/team",
    to: "/team",
  },

  {
    key: "5",
    label: "Contact Us",
    href: "/contact",
    to: "/contact",
  },
];

export default items;
