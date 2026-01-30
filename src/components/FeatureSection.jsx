import { features } from "../constants";
function FeatureSection() {
  return (
    <div className="relative py-20 border-b border-neutral-800 px-6">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="first-letter:uppercase text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          easily build{" "}
          <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-20 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div className="" key={index}>
            <div className="flex gap-4">
              <div className="h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
