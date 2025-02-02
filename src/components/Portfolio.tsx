import PortfolioData from "../data/PortfolioData";
import PortfolioItem from "./PortfolioItem";
import ProjectCarousel from "./ProjectCarousel";

const Portfolio = () => {
  const portfolioItems = PortfolioData.map((project, index) => (
    <div key={index} className="transition-all duration-300">
      <PortfolioItem
        imgURL={project.imgURL}
        title={project.title}
        stack={project.stack}
        link={project.link}
        text={project.text}
      />
    </div>
  ));

  return (
    <div
      id="portfolio"
      className="flex flex-col justify-center items-center text-center py-24 min-h-screen"
    >
      <h1 className="text-4xl font-bold text-white mb-6">
        <span className="text-[#B5FED9]">PORT</span>FOLIO
      </h1>
      <p className="mx-14 font-semibold text-lg text-white mb-10">
        This is a collection of some work I have contributed to or have created
        myself.
      </p>
      <div className="w-full max-w-screen-xl px-4">
        <ProjectCarousel>
          {portfolioItems}
        </ProjectCarousel>
      </div>
    </div>
  );
};

export default Portfolio;
