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
      <div className="relative w-[480px] h-[240px]">
        <img
          src={imgURL}
          className="object-cover w-full h-full rounded-lg"
        ></img>
        <div className="absolute bg-black opacity-0 w-full h-full top-0 rounded-lg group-hover:opacity-75 duration-500">
          <p className="opacity-0">
            {title}
            {stack}
            {text}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
