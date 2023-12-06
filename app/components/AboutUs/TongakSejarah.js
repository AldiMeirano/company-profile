"use client";
import Image from "next/image";
import { useState } from "react";

const TongkakSejarah = () => {
  const [data, setData] = useState([
    {
      name: "Pendirian yang mendebarkan",
      description:
        "Momen epik dimulai pada tahun 1990, ketika Irano membawa visinya ke dunia dengan mendirikan Rano Group. ",
    },
    {
      name: "Era Inovasi Tak Terhentikan",
      description:
        "untuk menciptakan standar baru dalam layanan distribusi, Rano Distributor terus berinovasi dengan mengadopsi teknologi terdepan dan merancang solusi yang memenuhi kebutuhan pelanggan masa kini.",
    },
    {
      name: "Penghargaan dan Pengakuan Internasional",
      description:
        "Seiring pertumbuhan kami, Rano Distributor memasuki fase ekspansi yang mengubah paradigma, merentangkan cakupan geografisnya ke wilayah-wilayah baru yang menantang.",
    },
    {
      name: "Penghargaan dan Pengakuan Internasional",
      description:
        "penghargaan ini bukan hanya sebagai tonggak prestasi, tetapi juga sebagai refleksi dari integritas, keunggulan, dan pelayanan tanpa kompromi yang dipersembahkan oleh setiap anggota tim Rano Group",
    },
  ]);
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            "Percikan Kreativitas: Sejarah Kilat Pendirian dan Kemewahan Inovasi
            Rano Distributor"
          </h2>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {data.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src="/tongkak1.jpg"
            alt="werehouse"
            className="rounded-lg bg-gray-100"
            width={200}
            height={50}
          />
          <Image
            src="/tongkak2.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
            width={200}
            height={50}
          />
          <Image
            src="/tongkak3.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
            width={200}
            height={50}
          />
          <Image
            src="/tongkak4.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
            width={200}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default TongkakSejarah;

// const CompanyOverview = () => {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
//         <div className="relative isolate overflow-hidden bg-green-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//           <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               Temukan Kemudahan dalam Distribusi Bersama Kami!
//             </h2>
//             <p className="mt-6 text-lg leading-8 text-gray-300">
//               Kami memahami setiap kilometer dan detil dalam perjalanan produk
//               Anda, dan kami berkomitmen untuk memberikan layanan distribusi
//               yang tidak hanya memenuhi harapan tetapi juga melebihi.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//               <a
//                 href="#"
//                 className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//               >
//                 Jelejahi Kami
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyOverview;
