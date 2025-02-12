import Logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="flex justify-around items-center py-12">
        <div className="flex flex-row gap-3 items-center cursor-pointer">
          <img className="mb-5" src={Logo} alt="" />
          <h2 className="text-3xl font-semibold">restaurant</h2>
        </div>
        <ul className="flex flex-row gap-10 text-gray-600">
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Gallery</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <a
          className="bg-[#EA6D27] font-serif drop-shadow-md text-white rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md py-5 px-7 text-nowrap"
          href=""
        >
          Book a table
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
