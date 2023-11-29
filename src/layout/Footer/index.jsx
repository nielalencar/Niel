import { Contacts } from "../../components/Contacts";

export function Footer() {
  return (
    <footer className="mx-8 md:mx-14 lg:mx-40 xl:mx-48 2xl:mx-96 py-5 md:py-10 border-t border-red-700">
      <h1 className="mb-4 md:mb-2 text-neutral-100 text-base text-center md:text-left font-normal font-roboto">&lt;Contatos&gt;</h1>
      <Contacts></Contacts>
    </footer>
  );
}
