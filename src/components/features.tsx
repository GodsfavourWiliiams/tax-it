import { Icons } from "@/assets/icons";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Features({ data }: { data: any }) {
  const pathname = usePathname();

  if (pathname === "/business") {
    return (
      <div className="py-0 sm:py-10 relative">
        <div className="app-container">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-content-center">
            <div className="flex items-center gap-6 lg:max-w-lg self-center">
              <div className="h-[450px] sm:h-[580px] bg-[#DCE2EA] w-3.5 sm:w-1.5 lg:w-4 mb-4 relative">
                <div className="bg-[#25A75C] w-1.5 h-[100px] absolute bottom-0" />
              </div>
              <dl className="max-w-xl flex flex-col gap-7 sm:gap-10 mb-5 text-[#4F4F4F] lg:max-w-none">
                {data.map((feature: { name: string; description: string }) => (
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
            <div className="w-full relative bg-[#F1F1F1] mt-16 pt-20 rounded-lg flex items-center justify-center">
              <Image
                src="/image 39.png"
                alt="Product screenshot"
                className="w-[482px] h-auto z-20"
                unoptimized
                width={232}
                height={142}
              />
            </div>

            <div className="absolute blur-3xl sm:blur-0 right-0 top-[calc(100%-36rem)]">
              <Icons.circleEmbellishment2 />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-0 sm:py-10 relative">
      <div className="app-container">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-content-center ">
          <div className="flex items-center gap-6 lg:max-w-lg self-center">
            <div className="h-[450px] bg-[#DCE2EA] w-1.5 mb-4">
              <div className="bg-[#25A75C] w-1.5 h-[81px]" />
            </div>
            <dl className="max-w-xl flex flex-col gap-10 mb-5 text-[#4F4F4F] lg:max-w-none">
              {data.map((feature: { name: string; description: string }) => (
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
