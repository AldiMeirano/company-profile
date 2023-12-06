const HeaderAbout = () => {
  return (
    <div className="relative isolate overflow-hidden bg-green-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sejarah Rano Group
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Rano Group lahir dari visi dan tekad seorang pengusaha hebat,
              irano, pada tahun 1990. Berawal dari keinginan untuk menyediakan
              solusi distribusi yang efisien di wilayah Jawa, Joko mendirikan
              perusahaan dengan fokus pada layanan berkualitas tinggi dan
              kepuasan pelanggan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;
