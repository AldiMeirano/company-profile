"use client";
const PanelHeader = () => {
  return (
    <div className="relative isolate overflow-hidden bg-green-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Eksplorasi Produk dan Layanan Terbaik Kami
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Dapatkan informasi mendalam tentang setiap produk dan layanan yang
              kami tawarkan. Dari spesifikasi hingga fitur, kami hadirkan semua
              yang perlu Anda ketahui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelHeader;
