const options = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projetos",
    href: "/projetos",
  },
  {
    name: "Tecnologias",
    href: "/tecnologias",
  },
  {
    name: "Contato",
    href: "/contato",
  },
];

export function NavgationBar() {
  return (
    <nav>
      <ul className="flex justify-center gap-2">
        {options.map((option) => (
          <li key={`${option.name}-${option.href}`}>
            <a href={option.href} className="text-white text-xs lg:text-base font-roboto font-normal bg-neutral-800 px-3 lg:px-4 py-1 rounded">{option.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
