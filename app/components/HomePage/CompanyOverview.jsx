"use client";
import Image from "next/image";
import { useState } from "react";

const CompanyOverview = () => {
  return (
    <div className="bg-green-900">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            "Percikan Kreativitas: Sejarah Kilat Pendirian dan Kemewahan Inovasi
            Rano Distributor"
          </h2>
          <a
            href="/about"
            className="inline-block rounded-md border border-transparent bg-green-500 px-8 py-3 text-center font-medium text-white hover:bg-green-200 mt-3"
          >
            Eksplor Rano Group
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;

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
