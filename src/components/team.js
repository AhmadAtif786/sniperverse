// components/FiniconsSection.tsx
import Image from "next/image";

const finicons = [
  {
    id: 1330,
    image: "/slider/1.png", // Replace with actual image paths
  },
  {
    id: 1008,
    image: "/slider/2.png",
  },
  {
    id: 1980,
    image: "/slider/3.png",
  },
];

export default function FiniconsSection() {
  return (
    <section className="bg-[#01061a] text-white py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h4 className="text-center text-[#00ffad] text-sm font-semibold mb-1">Finicons</h4>
        <h2 className="text-center text-white text-2xl font-bold mb-8">Meet Your Finicons</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {finicons.map((finicon) => (
            <div
              key={finicon.id}
              className="bg-[#0e1e2c] border border-[#00e5ff] rounded-lg p-1 w-full max-w-[280px] flex flex-col items-center"
            >
              <div className="bg-[#2ed3b7] rounded-md p-2 w-full h-[260px] flex items-center justify-center">
                <Image
                  src={finicon.image}
                  alt={`Finicons #${finicon.id}`}
                  width={150}
                  height={200}
                  className="object-contain"
                />
              </div>
              <p className="my-4 text-sm text-white font-medium">
                Finicons #{finicon.id}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
               <a
                href="/reserve"
                className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[linear-gradient(90deg,#15FFDF_2.27%,#00C965_97.73%)] text-black shadow-md hover:opacity-90 transition transform rotate-[0.1deg]"
              >
                🐉 Reserve Your Finicons
              </a>
        </div>
      </div>
    </section>
  );
}
