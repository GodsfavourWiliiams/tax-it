import { Icons } from "@/assets/icons";
import Image from "next/image";

const features = [
  {
    name: "Pay bills",
    description: "Paying your bills has never been so easy.",
  },
  {
    name: "Buy Airtime & Data",
    description: "Never get caught with low airtime and data again!",
  },
  {
    name: "Money Transfer",
    description: "Transferring money is now hassle-free.",
  },
  {
    name: "Pay Toll Fee",
    description: "Never worry about getting a toll ticket again",
  },
];

export default function Features() {
  return (
    <div className="py-0 sm:py-10 relative">
      <div className="app-container">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-content-center ">
          <div className="flex items-center gap-6 lg:max-w-lg self-center">
            <div className="h-[450px] bg-[#DCE2EA] w-1.5 mb-4">
              <div className="bg-[#25A75C] w-1.5 h-[81px]" />
            </div>
            <dl className="max-w-xl flex flex-col gap-10 mb-5 text-[#4F4F4F] lg:max-w-none">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative flex flex-col gap-3"
                >
                  <dt className="inline font-semibold text-[20px] sm:text-[28px] ">
                    {feature.name}
                  </dt>
                  <dd className="text-[15px] sm:text-lg">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src="/right panel.png"
            alt="Product screenshot"
            className="w-full h-auto z-20"
            unoptimized
            width={2432}
            height={1442}
          />
          <div className="absolute blur-3xl sm:blur-0 right-0 top-[calc(100%-36rem)]">
            <Icons.circleEmbellishment2 />
          </div>
        </div>
      </div>
    </div>
  );
}
