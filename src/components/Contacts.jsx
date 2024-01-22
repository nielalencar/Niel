const links = [
  {
    name: "GitHub",
    icon: "github-logo.svg",
    href: "https://github.com/nielalencar",
  },
  {
    name: "Instagram",
    icon: "instagram-logo.svg",
    href: "https://www.instagram.com/nielalencarr/",
  },
  {
    name: "Whatsapp",
    icon: "whatsapp-logo.svg",
    href: "https://wa.me/5595991643808",
  },
  {
    name: "nielalencar1@gmail.com",
    icon: "at.svg",
    href: "nielalencar1@gmail.com",
  },
];

export function Contacts() {
  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={`${link.icon}-${link.name}-${link.href}`}>
          <span>
            <a
              href={`${link.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 text-sm font-normal font-roboto inline-flex gap-2 cursor-pointer decoration-red-700 lg:hover:underline lg:hover:underline-offset-4"
            >
              <img src={link.icon} />
              {link.name}
            </a>
          </span>
        </li>
      ))}
    </ul>
  );
}
