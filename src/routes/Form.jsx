import { useState } from "react";



export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="my-10 mx-8 md:mx-14 lg:mx-40 xl:mx-48 2xl:mx-96 flex flex-col gap-8">
      <h1 className="text-neutral-100 text-base md:text-xl text-left md:text-center font-bold font-roboto tracking-tight">
        Conecte-se: O Criador Aberto para Novos Projetos e Parcerias.
      </h1>
      <div className="flex flex-col items-center">
        <form
          onSubmit={() => {}}
          className="flex flex-col items-start justify-center gap-3"
        >
          <input
            className="w-full md:w-[366px] h-10 px-4 py-1 bg-neutral-900 rounded border border-red-700 flex-col justify-center items-start gap-2.5 inline-flex"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="w-full md:w-[366px] h-10 px-4 py-1 bg-neutral-900 rounded border border-red-700 flex-col justify-center items-start gap-2.5 inline-flex"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="w-full md:w-[366px] h-32 px-4 py-1 bg-neutral-900 rounded border border-red-700 flex-col justify-center items-start gap-2.5 inline-flex"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input
            type="submit"
            value="Enviar"
            className="w-[104px] h-[47px] px-6 py-3 bg-red-700 rounded flex-col justify-center items-center inline-flex text-white text-xl font-bold font-roboto"
          />
        </form>
      </div>
    </section>
  );
}
