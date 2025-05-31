import { actionButtons } from "@/data";

const HeroSectionActions = () => {
  return (
    <div className=" w-full px-5 lg:flex lg:items-center lg:justify-center lg:mx-auto lg:mb-20 mb-10 lg:-mt-10 mt-10 relative lg:absolute z-20">
      <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {actionButtons.map((button, index) => {
          const IconComponent = button.icon;
          return (
            <a
              key={index}
              href={button.href}
              className={`${button.bgColor} ${button.hoverColor} text-white rounded-lg p-6 md:p-6 flex items-center justify-between transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 group`}
              role="button"
              tabIndex={0}
              aria-label={`Navigate to ${button.title}`}
            >
              <div className="flex-1">
                <h3
                  className={`${button.color} flex-shrink-0 font-semibold text-base md:text-lg leading-tight`}
                >
                  {button.title}
                </h3>
              </div>

              <div className="ml-4 flex-shrink-0">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg group-hover:bg-opacity-30 transition-all duration-300">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSectionActions;
