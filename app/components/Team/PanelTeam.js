import Image from "next/image";

const PanelTeam = async () => {
  const respone = await fetch("https://randomuser.me/api/?results=6", {
    next: { revalidate: 60 },
  });
  const { results } = await respone.json();

  const job = [
    "Direktur Keuangan",
    "Direktur",
    "Manajer Porsonalia",
    "Manajer Pemasaran",
    "Manajer Pabrik",
    "Administrasi",
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Team Rano Group
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Di Balik Kesuksesan Rano Group Ada Team Yang Hebat
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {results.map((item, index) => (
            <li key={item.id}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={item.picture.large}
                  alt="person"
                  width={50}
                  height={50}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {`${item.name.first}  ${results[0].name.last}`}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {job[index]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PanelTeam;
