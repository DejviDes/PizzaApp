import Pizza1 from "../assets/img/pizza1.png";
import Pizza2 from "../assets/img/pizza2.png";
import Pizza3 from "../assets/img/pizza3.png";
import Pizza4 from "../assets/img/pizza4.png";

function DishesCard() {
    return (
        <div className="flex flex-row justify-between max-w-7xl mx-auto gap-12 pb-24">
        <div className="flex flex-col items-center">
          <div className="relative bg-white border-4 border-white rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl px-5">
            <div className="absolute -top-24 left-0 right-0 flex flex-col items-center">
              <div className="relative">
                <img className="" src={Pizza1} alt="" />
                <div className="absolute top-6 right-0 rounded-full bg-black w-14 h-14 text-white font-semibold flex justify-center items-center">
                  $12
                </div>
              </div>
            </div>
            <h3 className="font-serif font-medium text-center text-lg mb-5 mt-36">
              Lumpia with Suace
            </h3>
            <p className="text-sm leading-6 text-gray-600 text-center mb-12">
              Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative bg-gray-100 border-4 border-white rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl px-5">
            <div className="absolute -top-24 left-0 right-0 flex flex-col items-center">
              <div className="relative">
                <img className="" src={Pizza2} alt="" />
                <div className="absolute top-6 right-0 rounded-full bg-black w-14 h-14 text-white font-semibold flex justify-center items-center">
                  $12
                </div>
              </div>
            </div>
            <h3 className="font-serif font-medium text-center text-lg mb-5 mt-36">
              Fish and Veggie
            </h3>
            <p className="text-sm leading-6 text-gray-600 text-center mb-12">
              Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative bg-gray-100 border-4 border-white rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl px-5">
            <div className="absolute -top-24 left-0 right-0 flex flex-col items-center">
              <div className="relative">
                <img className="" src={Pizza3} alt="" />
                <div className="absolute top-6 right-0 rounded-full bg-black w-14 h-14 text-white font-semibold flex justify-center items-center">
                  $12
                </div>
              </div>
            </div>
            <h3 className="font-serif font-medium text-center text-lg mb-5 mt-36">
              Tofu Chili
            </h3>
            <p className="text-sm leading-6 text-gray-600 text-center mb-12">
              Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative bg-gray-100 border-4 border-white rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl px-5">
            <div className="absolute -top-24 left-0 right-0 flex flex-col items-center">
              <div className="relative">
                <img className="" src={Pizza4} alt="" />
                <div className="absolute top-6 right-0 rounded-full bg-black w-14 h-14 text-white font-semibold flex justify-center items-center">
                  $12
                </div>
              </div>
            </div>
            <h3 className="font-serif font-medium text-center text-lg mb-5 mt-36">
              Egg and Cocumber
            </h3>
            <p className="text-sm leading-6 text-gray-600 text-center mb-12">
              Lorem ipsum dolor sit , consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
        </div>
      </div>
    )
}

export default DishesCard;