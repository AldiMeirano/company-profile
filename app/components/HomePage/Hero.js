import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Rano Distribusi
              <br />
              Keandalan dan Pelayanan Terbaik
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Rano Distributor adalah perusahaan distribusi yang memegang teguh
              komitmen untuk menjadi mitra distribusi terpercaya. Dengan
              pengalaman dan jaringan yang luas, kami menghadirkan solusi
              distribusi yang efisien dan andal untuk memenuhi kebutuhan klien
              kami.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Link href="/about">Telusuri Rano Group</Link>
              </button>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[30rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/2.jpg"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
