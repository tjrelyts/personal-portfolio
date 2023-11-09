import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="bg-[#14213d] flex flex-col justify-center pt-24 items-center text-center pb-48"
    >
      <h1 className="text-4xl font-bold text-white">
        <span className="text-[#fca311]">PORT</span>FOLIO
      </h1>
      <p className="mx-14 font-semibold text-lg text-white">
        This is a collection of some work I have contributed to or have created
        myself.
      </p>
      <div className="flex flex-wrap w-full items-start justify-center gap-10">
        {portfolio.map((project) => (
          <PortfolioItem
            imgURL={project.imgURL}
            title={project.title}
            stack={project.stack}
            link={project.link}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
