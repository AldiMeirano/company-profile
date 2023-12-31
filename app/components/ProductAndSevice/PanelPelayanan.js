import Image from "next/image";

const PanelLayanan = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-900">
                Layanan Profesional
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Layanan kami
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Kami memberikan layanan profesional dengan standar kualitas
                tinggi. Percayakan kebutuhan Anda kepada kami dan rasakan
                perbedaan pengalaman pelanggan yang unggul.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[28rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src="/layanan.webp"
            alt="Panel Layanan"
            width={640}
            height={100}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5 m0 -2 a2 2 0 1 1 0 4 a2 2 0 1 1 0 -4"
                      fill="black"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      "Paket Sembako Berkualitas"
                    </strong>{" "}
                    Kami menyediakan paket sembako berkualitas dengan pilihan
                    terbaik dari berbagai kategori, termasuk beras, minyak
                    goreng, gula, dan produk pokok lainnya. Pastikan kebutuhan
                    harian Anda terpenuhi dengan kualitas yang dijamin.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5 m0 -2 a2 2 0 1 1 0 4 a2 2 0 1 1 0 -4"
                      fill="black"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      "Distribusi Rutin, Ketersediaan Terjamin"
                    </strong>{" "}
                    Melalui layanan distribusi rutin kami, kami memastikan stok
                    sembako selalu tersedia. Dengan ketersediaan yang terjamin,
                    Anda dapat fokus pada kegiatan sehari-hari tanpa khawatir
                    kehabisan persediaan.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5 m0 -2 a2 2 0 1 1 0 4 a2 2 0 1 1 0 -4"
                      fill="black"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      "Distribusi Rutin, Ketersediaan Terjamin"
                    </strong>{" "}
                    Melalui layanan distribusi rutin kami, kami memastikan stok
                    sembako selalu tersedia. Dengan ketersediaan yang terjamin,
                    Anda dapat fokus pada kegiatan sehari-hari tanpa khawatir
                    kehabisan persediaan.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5 m0 -2 a2 2 0 1 1 0 4 a2 2 0 1 1 0 -4"
                      fill="black"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      "Pilihan Produk Beragam"
                    </strong>{" "}
                    Temukan pilihan produk sembako yang beragam sesuai dengan
                    kebutuhan keluarga Anda. Kami menyediakan variasi kemasan
                    dan merek untuk memenuhi selera dan preferensi Anda.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-none text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5 m0 -2 a2 2 0 1 1 0 4 a2 2 0 1 1 0 -4"
                      fill="black"
                    />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      "Paket Hemat dan Promo Spesial"
                    </strong>{" "}
                    Jangan lewatkan paket hemat dan promo spesial kami. Hemat
                    lebih banyak dengan pembelian dalam jumlah besar dan nikmati
                    penawaran eksklusif untuk produk sembako pilihan.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PanelLayanan;
