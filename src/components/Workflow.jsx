import { CheckCircle2 } from "lucide-react";
import codeImage from "../assets/code.jpg";
import { checklistItems } from "../constants";
function Workflow() {
  return (
    <div className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide ">
        Accelerate your{" "}
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <img src={codeImage} alt="Code image" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((checklistItem, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{checklistItem.title}</h5>
                <p className="text-sm text-neutral-500">
                  {checklistItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workflow;
