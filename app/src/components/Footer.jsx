import Logo from "../assets/img/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-10 pb-24 mt-20">
      <div className="container max-w-9xl mx-auto px-8">
        <div className="grid items-center grid-cols-5 gap-10">
          <div className="col-span-2 flex flex-row gap-3 items-center cursor-pointer">
            <img className="mb-5" src={Logo} alt="" />
            <h2 className="text-3xl font-semibold">restaurant</h2>
          </div>
          <h2 className="font-semibold">NAVIGATION</h2>
          <h2 className="font-semibold">DISHES</h2>
          <h2 className="font-semibold">FOLLOW US</h2>
        </div>
        <div className="grid grid-cols-5 gap-10 text-sm">
          <div className="col-span-2">
            <p className="text-gray-600 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <h2 className="font-semibold mt-7 mb-5">OPENING HOURS</h2>
            <div className="grid grid-cols-3">
              <div className="text-gray-600">
                <p className="mb-1">Monday - Friday</p>
                <p>8:00 am to 9:00 pm</p>
              </div>
              <div className="text-gray-600">
                <p className="mb1">Saturday</p>
                <p>8:00 am to 9:00 pm</p>
              </div>
              <div className="text-gray-600">
                <p className="mb-1">Sunday</p>
                <p>CLOSED</p>
              </div>
            </div>
          </div>

          <div>
            <ul className="text-gray-600">
              <li className="mb-2">Menu</li>
              <li className="mb-2">About us</li>
              <li className="mb-2">Contact us</li>
              <li>Main dishes</li>
            </ul>
          </div>

          <div>
            <ul className="text-gray-600">
              <li className="mb-2">Fish & Viggies</li>
              <li className="mb-2">Tofu Chili</li>
              <li className="mb-2">Egg & Cucumber</li>
              <li>Lumpia w/Sauce</li>
            </ul>
          </div>

          <div>
            <div className="flex flex-row gap-4 text-gray-600">
              <div className="rounded-full border border-black p-2 text-black">
                <FaFacebookF />
              </div>
              <div className="rounded-full border border-black p-2 text-black">
                <FaInstagram />
              </div>
              <div className="rounded-full border border-black p-2 text-black">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="h-0 w-full border border-gray-200 my-20"></div>
        <div className="flex justify-between">
          <p className="text-gray-600 text-sm">
            &copy;2025 Restaurants. All Right Reserved. Designed by David
          </p>
          <div className="flex flex-row gap-10">
            <p className="text-gray-600 text-sm">Terms of Service</p>
            <p className="text-gray-600 text-sm">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
