import Pizza1 from "../assets/img/pizza1.png";
import Pizza2 from "../assets/img/pizza2.png";
import Pizza3 from "../assets/img/pizza3.png";
import Pizza4 from "../assets/img/pizza4.png";

function DishesCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "80rem",
        margin: "0 auto",
        gap: "3rem",
        paddingBottom: "6rem",
      }}
    >
      {[Pizza1, Pizza2, Pizza3, Pizza4].map((pizza, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: index === 0 ? "white" : "#f3f4f6",
              border: "4px solid white",
              borderTopLeftRadius: "3rem",
              borderBottomRightRadius: "3rem",
              borderTopRightRadius: "0.75rem",
              borderBottomLeftRadius: "0.75rem",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-6rem",
                left: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <img src={pizza} alt="" />
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: 0,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    width: "3.5rem",
                    height: "3.5rem",
                    color: "white",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  $12
                </div>
              </div>
            </div>
            <h3
              style={{
                fontFamily: "serif",
                fontWeight: "500",
                textAlign: "center",
                fontSize: "1.125rem",
                marginBottom: "1.25rem",
                marginTop: "9rem",
              }}
            >
              {index === 0
                ? "Lumpia with Sauce"
                : index === 1
                ? "Fish and Veggie"
                : index === 2
                ? "Tofu Chili"
                : "Egg and Cucumber"}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.5rem",
                color: "#4b5563",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod
              tempor
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DishesCard;
