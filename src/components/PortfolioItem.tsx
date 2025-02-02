interface Props {
  title: string;
  imgURL: string;
  stack: string[];
  link: string;
  text: string;
}

const PortfolioItem = ({ title, imgURL, stack, link, text }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="relative w-full max-w-[480px] mx-auto">
        <img
          src={imgURL}
          alt={text}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-0 rounded-lg sm:group-hover:bg-opacity-90 transition-all duration-500">
          <div className="flex flex-col justify-center items-center h-full p-4 sm:p-6 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 overflow-y-auto">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center mb-2 sm:mb-4">
              {stack.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs sm:text-sm px-2 py-1 rounded-full bg-[#B5FED9] text-black font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-white text-xs sm:text-sm leading-relaxed max-h-[150px] overflow-y-auto">
              {text}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
