const WIP = () => {
  return (
    <div className="flex flex-col max-w-[480px] h-auto mt-24 mx-auto items-center justify-center text-center">
      <img
        src="/assets/wip.png"
        alt="WIP"
        className="w-auto h-auto hover:scale-110 transition duration-300"
      />
      <h1 className=" w-full font-bold text-white p-10 text-xl md:text-3xl">
        I am currently remodelling my portfolio section. Check my{" "}
        <a
          href="https://github.com/tjrelyts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          GitHub
        </a>{" "}
        in the meantime by clicking the link or the icon below.
      </h1>
    </div>
  );
};

export default WIP;
