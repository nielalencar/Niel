const itens = [
  {
    image: "/images/insight-sales-img.png",
    href: "https://main--venerable-snickerdoodle-1ffda1.netlify.app/",
    icon: "/images/insight-sales-icon.png",
    title: "Insight Sales",
  },
  //   {
  //     image: "insight-sales-img.png",
  //     href: "https://main--venerable-snickerdoodle-1ffda1.netlify.app/",
  //     icon: "/insight-sales-icon.png",
  //     title: "Insight Sales",
  //   },
  //   {
  //     image: "insight-sales-img.png",
  //     href: "https://main--venerable-snickerdoodle-1ffda1.netlify.app/",
  //     icon: "/insight-sales-icon.png",
  //     title: "Insight Sales",
  //   },
];

export function Projects() {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-10 py-10 md:py-20 mx-8 md:mx-14 lg:mx-40 xl:mx-48 2xl:mx-96">
      <h1 className="text-neutral-100 text-base md:text-xl font-roboto font-bold tracking-tight">
        Explorando Projetos: O Criador na Vanguarda da Experiência Tech.
      </h1>
      <ul>
        {itens.map((item) => (
          <li key={`${item.image}-${item.href}-${item.icon}-${item.title}`}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <img src={item.image} className="rounded-t-2xl"></img>
              <div className="flex items-center justify-start bg-stone-900 px-6 py-2 gap-4 rounded-b-2xl">
                <img
                  src={item.icon}
                  className="w-[42px] h-[42px] p-2 bg-stone-950 rounded-full"
                ></img>
                <h1 className="text-neutral-100 text-xl font-roboto font-normal tracking-tight">
                  {item.title}
                </h1>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
