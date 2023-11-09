interface Props {
  title: string;
  imgURL: string;
  stack: string[];
  link: string;
  text: string;
}

const PortfolioItem = ({ title, imgURL, stack, link, text }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-5 mt-10 group bg-white duration-500 ease-in-out rounded-xl overflow-hidden max-w-lg"
    >
      <div className="relative w-full">
        <img
          src={imgURL}
          alt=""
          className="w-full object-cover rounded-xl"
        ></img>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white from-25% to-transparent transition-all rounded-xl"></span>
        <h1 className="absolute top-5 left-0 right-0 font-bold text-2xl">
          {title}
        </h1>
      </div>
      <div className="h-0 group-hover:h-48 duration-500 ease-in-out">
        <p className="flex flex-wrap justify-center h-full items-center pb-5 gap-2 text-lg px-5">
          {text}
          {stack.map((item) => (
            <span className="inline-block px-2 font-bold text-lg border-2 border-black rounded-md ">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
