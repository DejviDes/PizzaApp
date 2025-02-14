import ReviewsCard from "./ReviewsCards";

function Reviews() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center mb-44">
        <h1 className="text-center font-medium font-serif text-5xl mt-16 mb-12 line">
          Our Happy Customers
        </h1>
        <p className="max-w-xs text-sm text-center text-gray-600 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{" "}
        </p>
      </div>
      <ReviewsCard />
    </div>
  );
}

export default Reviews;
