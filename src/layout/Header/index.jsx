import { Profile } from "../../components/Profile";
import { NavgationBar } from "../../components/Menu";

export function Header() {
  return (
    <header className="pt-[62px] md:pt-[92px] flex flex-col gap-5 lg:gap-6 mx-8 md:mx-14 lg:mx-40 xl:mx-48 2xl:mx-96 pb-5 md:pb-10 border-b border-neutral-700">
      <Profile />
      <NavgationBar />
    </header>
  );
}
