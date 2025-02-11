import Logo from "../assets/img/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <div className="grid grid-cols-4 gap-10">
          <div>
            <div className="flex flex-row gap-3 items-end cursor-pointer">
              <img src={Logo} alt="" />
              <h2 className="text-3xl font-semibold">restaurant</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              dolor, animi quaerat quod nemo voluptatum dolores magnam quam
              blanditiis voluptatem neque dolorem iure, accusantium dignissimos
              corporis qui quae. Sunt, reprehenderit!
            </p>
          </div>
          <div>
            <h2>NAVIGATION</h2>
            <ul>
              <li>Menu</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Main dishes</li>
            </ul>
          </div>
          <div>
            <h2>DISHES</h2>
            <ul>
              <li>Fish & Viggies</li>
              <li>Tofu Chili</li>
              <li>Egg & Cocumber</li>
              <li>Lumpia w/Suace</li>
            </ul>
          </div>
          <div>
            <h2>FOLLOW US</h2>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
