import Image from "next/image";

const Testimonial = async () => {
  const respone = await fetch("https://randomuser.me/api/?results=6", {
    next: { revalidate: 60 },
  });
  const { results } = await respone.json();

  const data = [
    "Layanan yang andal dan pengiriman tepat waktu membuat kami yakin memilih mereka sebagai mitra bisnis terpercaya",
    "Mereka tidak hanya menjadi distributor, tetapi juga mitra strategis yang membantu kami meningkatkan efisiensi operasional kami.",
    "Mereka bukan sekadar distributor, tetapi mitra yang mendukung pertumbuhan bisnis kami melalui layanan yang handal dan profesional.",
    " Setiap pertanyaan atau permintaan kami ditanggapi dengan cepat dan efisien, menciptakan pengalaman pelanggan yang istimewa",
    "Saya suka dengan Rano memberikan pelayanan terbaik dan stock toko saya terjamin",
    "Mereka handal barang yang di kirim kualitas bagus pokonya top deh",
  ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pengalaman Luar Biasa Bersama Rano Group
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            "Dengarlah dari para pelanggan kami tentang bagaimana Rano Group
            memberikan solusi yang inovatif, pengalaman pelanggan yang luar
            biasa, dan hasil yang memuaskan. Kami bangga berbagi testimonial ini
            untuk memberikan wawasan tentang kualitas layanan dan produk kami
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {results.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={item.picture.large}
                    alt="person testimonial"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {`${item.name.first}  ${results[0].name.last}`}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-gray-500">
                      {data[index]}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
