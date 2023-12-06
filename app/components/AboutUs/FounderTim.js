import Image from "next/image";
const posts = [
  {
    id: 1,
    href: "#",
    description:
      "CEO perusahaan distribusi kami, adalah lulusan Master of Business Administration (MBA) dari Wharton School of Business. Dengan keahlian di bidang manajemen bisnis dan strategi",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    href: "#",
    description:
      "Lulusan dari Stanford University, keahliannya melibatkan pengembangan algoritma cerdas dan teknologi pembelajaran mesin. Sebagai CTO, Emily mendefinisikan arah teknologi perusahaan",
    author: {
      name: "Irano",
      role: "Founder / CEO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 3,
    href: "#",
    description:
      "Master of Business Administration (MBA) dari Harvard Business School ke peranannya sebagai Chief Financial Officer (CFO), ia memiliki pemahaman mendalam tentang strategi keuangan.",
    author: {
      name: "Kiwi",
      role: "Co-Founder / CFO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  // More posts...
];

const FounderTim = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tim Di Balik Kesuksesan Rano Group
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Irano, sebagai pendiri Rano Group, membentuk tim yang berdedikasi
            dan berkompeten untuk membawa perusahaan menuju kesuksesan. Beberapa
            anggota tim kunci saat ini termasuk:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
                <p className="mt-5  text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                  width={50}
                  height={50}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderTim;
