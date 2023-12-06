import Image from "next/image";
const PanelProduct = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Produk</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/beras.jpg"
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                  layout="fill"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Beras Pilihan:
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Kualitas beras terbaik dengan pilihan jenis dan merek untuk
                memenuhi selera Pelanggan anda. Dari beras premium hingga beras
                organik
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/oil.jpg"
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  className="h-full w-full object-cover object-center"
                  layout="fill"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Minyak Goreng Berkualitas:
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Minyak goreng berkualitas tinggi untuk memasak sehari-hari.
                Pilih dari berbagai merek dan jenis yang sesuai dengan
                preferensi kuliner Anda.
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/mie.jpg"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  className="h-full w-full object-cover object-center"
                  layout="fill"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Mie Instan dan Produk Olahan:
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Mie instan dan produk olahan praktis untuk mempermudah persiapan
                makanan Anda. Temukan berbagai varian dan rasa yang lezat.
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/sugar.jpg"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  className="h-full w-full object-cover object-center"
                  layout="fill"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Gula Pasir dan Gula Merah:
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Gula berkualitas untuk menambahkan manis pada hidangan Anda.
                Dari gula pasir hingga gula merah, kami menyediakan opsi
                berkualitas tinggi.
              </p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src="/produklain.jpg"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  className="h-full w-full object-cover object-center"
                  layout="fill"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Produk Pokok Lainnya:
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Dari tepung terigu hingga susu kental manis, lengkapi kebutuhan
                dapur Anda dengan produk sembako lainnya yang berkualitas
                tinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelProduct;
