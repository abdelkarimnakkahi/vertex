import { CheckCircle2, Heading5 } from "lucide-react";
import { pricingOptions } from "../constants";

function Pricing() {
  return (
    <div className="py-10 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-8">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((priceOption, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p>
                {priceOption.title}
                {priceOption.title === "Pro" && (
                  <span className="bg-linear-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mt-8">
                <span className="text-5xl mr-2">{priceOption.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {priceOption.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center py-4 rounded-lg mt-6 w-full tracking-tight text-xl hover:bg-orange-900 border border-orange-900 transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
