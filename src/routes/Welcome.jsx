const contents = [
  {
    type: "title",
    content: "Bem-vindo ao Mundo de Niel: Onde Design e Tecnologia Se Unem!",
  },
  {
    type: "paragraph",
    content:
      "Olá, sou Niel, um apaixonado por tecnologia e design de interfaces, trilhando meu caminho no extremo norte do Brasil, mais precisamente em Boa Vista-Roraima. Aqui, mergulho de cabeça em dois projetos Open Source que capturam minha essência criativa e visão para o futuro.",
  },
  {
    type: "paragraph",
    content:
      "No universo do desenvolvimento front-end, sou criador do Home Map, um projeto inovador com foco no mercado imobiliário que está em desenvolvimento. Meu objetivo é contribuir para a criação de uma experiência única, unindo funcionalidade e estética.",
    link: "https://github.com/home-map",
  },
  {
    type: "paragraph",
    content:
      "No cenário empresarial, faço parte do projeto Flow, um ERP que desafia os limites da eficiência. Aqui, meu papel se estende além do design de interfaces para abraçar o desenvolvimento front-end, garantindo uma integração perfeita entre forma e função.",
    link: "https://github.com/flow-erp",
  },
  {
    type: "paragraph",
    content:
      "Mas não paro por aí. Enquanto não estou imerso em linhas de código e esboços de design, encontro meu refúgio no mundo de Counter-Strike, acompanhando-o desde sua primeira versão. A paixão por esse jogo vai além do monitor, inspirando meu trabalho diário.",
  },
  {
    type: "paragraph",
    content:
      "Em minha jornada educacional, mergulho nos conteúdos do CS50, explorando os fundamentos da ciência da computação. Essa busca constante pelo conhecimento não apenas aprimora minhas habilidades, mas também amplia minha visão sobre o potencial transformador que a tecnologia proporciona.",
  },
  {
    type: "paragraph",
    content:
      "Como freelancer, estou sempre aberto a novos desafios e colaborações inovadoras. Se você busca não apenas um profissional, mas alguém apaixonado por criar experiências significativas, você está no lugar certo.",
  },
  {
    type: "paragraph",
    content:
      "Explore meu portfólio e embarque nessa jornada onde a tecnologia se encontra com o design, criando soluções que ultrapassam as fronteiras do convencional. Vamos criar algo extraordinário juntos!",
  },
];

export function Welcome() {
  return (
    <section className="my-10 mx-8 md:mx-14 lg:mx-40 xl:mx-48 2xl:mx-96 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        {contents.map((line) =>
          line.type === "title" ? (
            <h1
              key={line.content}
              className="text-neutral-100 text-base md:text-xl text-left md:text-center font-bold font-roboto tracking-tight"
            >
              {line.content}
            </h1>
          ) : (
            <p
              key={line.content}
              className="text-neutral-100 text-xs md:text-sm lg:text-base text-left font-normal leading-normal tracking-tight md:mx-14 lg:mx-40 xl:mx-48 2xl:mx-64"
            >
              {line.link ? (
                <a
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 lg:no-underline lg:hover:underline lg:hover:underline-offset-8 decoration-red-700 lg:decoration-transparent lg:hover:decoration-red-700"
                >
                  {line.content}
                </a>
              ) : (
                line.content
              )}
            </p>
          )
        )}
      </div>
    </section>
  );
}
