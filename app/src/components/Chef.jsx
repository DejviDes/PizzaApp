import ChefImg from "../assets/img/chef.png";

function Chef() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-5 items-center max-w-6xl mx-auto my-24">
        <div className="flex flex-col col-span-3">
          <h1 className="font-medium font-serif text-5xl mb-12 max-w-sm">
            Our Expects Chef
          </h1>
          <p className="text-gray-600 leading-6 text-sm max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-2 text-sm text-gray-600 mt-12 mb-8">
            <ul className="max-w-60">
              <li className="flex items-center mb-5">
                <span className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full mr-3 flex-shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </li>
              <li className="flex items-center mb-5">
                <span className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full mr-3 flex-shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full mr-3 flex-shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </li>
            </ul>
            <ul className="max-w-60">
              <li className="flex items-center mb-5">
                <span className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full mr-3 flex-shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </li>
              <li className="flex items-center mb-5">
                <span className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full mr-3 flex-shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 flex items-center justify-center bg-orange-500 text-white rounded-full mr-3 flex-shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-5 mt-9 ml-20">
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
        <div className="flex col-span-2">
          <img src={ChefImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
