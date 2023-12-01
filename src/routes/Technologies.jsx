import { useState } from "react";

const techs = [
  {
    id: 1,
    name: "Javascript",
    description:
      "JavaScript é amplamente utilizado para o desenvolvimento web, criação de aplicativos e soluções móveis por conta de seu uso em aplicações para a Internet das Coisas.",
    icon: "/javascript-original-1.svg",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 2,
    name: "React",
    description:
      "React utiliza um Virtual DOM para otimizar atualizações, melhorando a eficiência do DOM real e proporcionando uma experiência de usuário mais ágil.",
    icon: "/react-original-1.svg",
    href: "https://react.dev/",
  },
  {
    id: 3,
    name: "NEXT.JS",
    description:
      "Next.js pré-renderiza páginas durante a compilação, acelerando tempos de carregamento e garantindo uma navegação mais rápida para os usuários.",
    icon: "/nextjs-line-1.svg",
    href: "https://nextjs.org/",
  },
  {
    id: 4,
    name: "Vite",
    description:
      "Vite oferece desenvolvimento em tempo real com um servidor veloz, proporcionando uma experiência de desenvolvimento mais eficiente.",
    icon: "/vite.svg",
    href: "https://vitejs.dev/",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    description:
      "Tailwind CSS oferece flexibilidade com utilitários para estilização altamente customizada, permitindo controle preciso sobre o design sem CSS personalizado extenso.",
    icon: "/tailwindcss-plain-1.svg",
    href: "https://tailwindcss.com/",
  },
  {
    id: 6,
    name: "Sass",
    description:
      "Sass adiciona recursos ao CSS, como variáveis e mixins, facilitando a estilização e tornando o código mais modular e fácil de manter.",
    icon: "/sass-original-1.svg",
    href: "https://sass-lang.com/documentation/",
  },
  {
    id: 7,
    name: "Figma",
    description:
      "Figma permite colaboração em tempo real, transformando o design em um processo simultâneo e facilitando a comunicação entre membros da equipe.",
    icon: "/figma-original-1.svg",
    href: "https://www.figma.com/best-practices/guide-to-developer-handoff/",
  },
  {
    id: 8,
    name: "VS code",
    description:
      "VSCode possui um vasto ecossistema de extensões, personalizando o ambiente de desenvolvimento e aumentando a produtividade dos desenvolvedores.",
    icon: "/vscode-original-1.svg",
    href: "https://code.visualstudio.com/",
  },
  {
    id: 9,
    name: "Ubuntu",
    description:
      "Distribuição de Linux conhecida pela sua acessibilidade. Utiliza o ambiente gráfico GNOME, proporcionando um sistema estável e de fácil uso.",
    icon: "/ubuntu-plain-1.svg",
    href: "https://ubuntu.com/desktop/developers",
  },
  {
    id: 10,
    name: "Git",
    description:
      "Git simplifica a gestão de branches, permitindo o desenvolvimento simultâneo de recursos e correções, mantendo um histórico claro e organizado das alterações.",
    icon: "/git-original-1.svg",
    href: "https://git-scm.com/",
  },
];

export function Technologies() {
  const [showDescription, setShowDescription] = useState(null);

  function handleClick(tech) {
    setShowDescription(showDescription === tech ? null : tech);
  }

  return (
    <section className="md:mx-14 lg:mx-40 xl:mx-48 2xl:mx-96 my-10 md:my-20 flex flex-col items-center justify-center gap-20">
      <h1 className="mx-8 text-neutral-100 text-base md:text-xl font-roboto font-bold tracking-tight">
        O Criador Protagonista: Ferramentas que me acompanham na jornada tech.
      </h1>
      <ul className="xl:mx-20 2xl:mx-60 flex flex-wrap items-center justify-center gap-2">
        {techs.map((tech) => (
          <li
            key={tech.id}
            className="w-[175px] h-[175px] md:w-[200px] h-[175px ] md:h-[200px ] flex flex-col items-center justify-center gap-2 md:gap-3 bg-neutral-700 lg:hover:bg-zinc-700 bg-opacity-70 rounded"
          >
            {showDescription === tech ? (
              <div
                onClick={() => setShowDescription(null)}
                className="w-[175px] h-[175px] md:w-[200px] h-[175px ] md:h-[200px ] flex flex-col items-center justify-center gap-2 p-3 md:p-[14px]  md:py-10 md:gap-[10px] bg-neutral-900"
              >
                <p className="text-white text-xs md:text-sm font-roboto font-normal leading-[17.50px] md:leading-tight  tracking-tight lg:cursor-pointer">
                  {tech.description}
                </p>
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 text-xs md:text-sm font-roboto font-normal leading-none md:leading-[18px] underline tracking-tight"
                >
                  Documentação
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-3 md:p-[14px]  md:py-10 gap-2 md:gap-[10px]">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  onClick={() => handleClick(tech)}
                  tabIndex={0}
                  className="w-20 md:w-[92px]  h-20 md:h-[92px] lg:cursor-pointer"
                />
                <h3 className="text-white text-sm font-normal font-roboto tracking-tight">
                  {tech.name}
                </h3>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
