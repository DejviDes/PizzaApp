import DishesMainImg from "../assets/img/dishesMainImg.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function DishesMain() {
  return (
    <div className="pb-32">
      <div className="grid grid-cols-2 items-center max-w-7xl mx-auto my-16 px-10">
        <div className="w-full flex justify-end">
          <img src={DishesMainImg} alt="" />
        </div>
        <div className="flex items-center flex-col">
          <div>
            <h1 className="font-medium font-serif text-5xl mb-16 max-w-sm">
              Wecome to Our Restaurant
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishesMain;
