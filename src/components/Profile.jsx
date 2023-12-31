const user = {
  name: "Niel",
  imageUrl: "https://github.com/nielalencar.png",
  design: "Design de interface",
  dev: "Dev Front-end",
}

export function Profile() {
  return (
    <div className="flex justify-center items-center gap-5 lg:items-end">
      <img
        src={user.imageUrl}
        alt={"Foto de perfil do" + user.name}
        className="w-[85px] lg:w-[150px] h-[85px] lg:h-[150px] rounded-full"
      />
      <div>
        <h1 className="text-neutral-100 text-2xl font-bold font-roboto">
          {user.name}
        </h1>
        <h2 className="text-neutral-100 text-base font-normal font-roboto">
          {user.design}
        </h2>
        <h2 className="text-neutral-100 text-base font-normal font-roboto">
          {user.dev}
        </h2>
      </div>
    </div>
  );
}
