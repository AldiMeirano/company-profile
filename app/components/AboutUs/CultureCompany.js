const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const Culture = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Budaya Perusahaan
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dengan fondasi sejarah yang kuat, Rano Group tetap setia pada
            nilai-nilai dan budaya perusahaan yang telah ditanamkan oleh
            pendirinya, Irano.
          </p>
          <ul className="list-disc mt-6 text-lg leading-8 text-gray-600">
            <li>
              <strong>Komitmen terhadap Pelanggan:</strong> Rano Group tetap
              berkomitmen untuk memberikan pelayanan terbaik kepada pelanggan di
              seluruh Indonesia.
            </li>
            <li>
              <strong>Inovasi dan Efisiensi:</strong> Kami terus mencari cara
              untuk meningkatkan efisiensi distribusi melalui penerapan
              teknologi terbaru dan praktik inovatif.
            </li>
            <li>
              <strong>Keberlanjutan dan Pertumbuhan:</strong> Rano Group tidak
              hanya bertahan tetapi juga berkembang sejalan dengan perkembangan
              industri distribusi.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Culture;
