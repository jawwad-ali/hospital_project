import { ArrowRight, CheckCircle } from "lucide-react";

const ChoosingUs = () => {
  return (
    <div>
      {/* Why You Choose Us */}
      <div className="w-full max-w-xl">
        <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
          Why You Choose Us?
        </h3>
        <ul className="space-y-4 mb-6">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </li>
            ))}
        </ul>
        <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChoosingUs;
