import React from "react";

type Props = {
  data: any;
};

const PaymentTool = (props: Props) => {
  const { data } = props;

  return (
    <div className="py-24 app-container mx-auto ">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-3xl font-semibold tracking-tight text-[#4F4F4F] sm:text-4xl lending-[122.222%]">
          Payments tools designed for you
        </p>
        <p className="mt-3 text-lg leading-[160%] text-[#4F4F4F]">
          Explore payment features that provides you with every possible
          solution
        </p>
      </div>
      <dl className="mx-auto mt-10 grid grid-cols-1 gap-8 place-items-center lg:place-items-stretch lg:grid-cols-3">
        {data?.map(
          (feature: {
            name: string;
            icon: any;
            description:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined;
          }) => (
            <div
              key={feature.name}
              className="relative border border-border py-[60px] px-10 rounded-lg w-full place-content-center max-w-[410px]"
            >
              <dt className="gap-4 flex flex-col font-semibold leading-7 ">
                <div className="flex h-20 w-20 items-center justify-center ">
                  <feature.icon
                    className="h-20 w-20 text-white"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-[#10091A] text-xl font-medium">
                  {feature.name}
                </span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-[#555555] ">
                {feature.description}
              </dd>
            </div>
          )
        )}
      </dl>
    </div>
  );
};

export default PaymentTool;
