import { FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col h-screen w-full items-center justify-center flex-wrap select-none"
    >
      <div className="flex flex-col justify-center py-14 text-center md:text-left text-white">
        <h1 className="flex font-bold text-4xl md:text-6xl justify-center md:justify-normal whitespace-pre">
          <span className="text-[#B5FED9]">Tyler</span> Santosuosso
        </h1>
        <p className="max-w-sm text-lg font-semibold"></p>
      </div>
      <div className="flex flex-col">
        <button
          type="button"
          className="flex font-bold items-center p-2 mb-10 rounded hover:rounded-lg duration-75 uppercase bg-[#ffffff] hover:bg-[#e5e5e5]"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/tylersanto",
              "_blank",
              "noopener"
            )
          }
        >
          LinkedIn
          <FaLinkedin className="pl-2" size="30" />
        </button>
        <button
          type="button"
          className="flex font-bold justify-evenly items-center p-2 rounded hover:rounded-lg duration-75 uppercase bg-[#ffffff] hover:bg-[#e5e5e5]"
          onClick={() =>
            window.open("mailto:tylerj-santo@outlook.com", "_blank", "noopener")
          }
        >
          E-mail
          <BiMailSend className="pl-1" size="30" />
        </button>
      </div>
    </div>
  );
};

export default Home;
