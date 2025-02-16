import DishesCard from "./DishesCard";
import DishesMain from "./DishesMain";

function Dishes() {
    return (
        <div style={{backgroundColor: "#f3f4f6"}}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "11rem",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontWeight: 500,
                        fontFamily: "serif",
                        fontSize: "3rem",
                        lineHeight: "1rem",
                        marginTop: "4rem",
                        marginBottom: "3rem",
                    }}
                >
                    Our Special Dishes
                </h1>
                <p
                    style={{
                        maxWidth: "20rem",
                        fontSize: "0.875rem",
                        lineHeight: "1.5rem",
                        color: "#4b5563",
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt{" "}
                </p>
            </div>
            <DishesCard/>
            <DishesMain/>
        </div>
    );
}

export default Dishes;
