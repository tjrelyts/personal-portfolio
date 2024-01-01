interface Props {
  title: string;
  imgURL: string;
  stack: string[];
  link: string;
  text: string;
}

const PortfolioItem = ({ title, imgURL, stack, link, text }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group">
      <div className="relative w-[512px] h-[256px]">
        <img
          src={imgURL}
          className="object-cover w-full h-full rounded-lg"
        ></img>
        <div className="absolute h-0 w-0 left-0 bottom-0 right-0 top-0 m-auto rounded-lg group-hover:h-full group-hover:w-full transition-all duration-500 ease-out bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
          {" "}
          <p className="flex justify-center items-center w-full h-full flex-wrap">
            {text}
            {stack.map((item) => (
              <span className="inline-block px-2 font-bold text-lg border-2 border-black rounded-md ">
                {item}
                {title}
              </span>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
