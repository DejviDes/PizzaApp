import HeroImg from "../assets/img/heroImg.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Herosection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 items-center max-w-6xl mx-auto my-24 px-10">
        <div className="flex flex-col">
          <h1 className="font-medium font-serif text-5xl mb-16 max-w-sm">
            We provide the best food for you
          </h1>
          <p className="text-gray-600 text-sm max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-row gap-5 mt-9">
            <a
              className="bg-[#000000] font-serif drop-shadow-md text-white rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md py-4 px-7 text-nowrap"
              href=""
            >
              Menu
            </a>
            <a
              className="bg-[#EA6D27] font-serif drop-shadow-md text-white rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md py-4 px-7 text-nowrap"
              href=""
            >
              Book a table
            </a>
          </div>
          <div className="mt-16">
            <div className="flex flex-row gap-4 text-gray-600 items-center">
              <div className="cursor-pointer rounded-full border border-black p-2 text-black">
                <FaFacebookF />
              </div>
              <div className="cursor-pointer rounded-full border border-black p-2 text-black">
                <FaInstagram />
              </div>
              <div className="cursor-pointer rounded-full border border-black p-2 text-black">
                <FaTwitter />
              </div>
              <div className="h-0 border w-32 border-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="">
          <img width={650} src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
