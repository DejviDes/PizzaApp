import DishesMainImg from "../assets/img/dishesMainImg.png";

function DishesMain() {
    return (
        <div style={{paddingBottom: "8rem"}}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    maxWidth: "80rem",
                    margin: "4rem auto",
                    padding: "0 2.5rem",
                }}
            >
                <div
                    style={{width: "100%", display: "flex", justifyContent: "flex-end"}}
                >
                    <img src={DishesMainImg} alt=""/>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <div>
                        <h1
                            style={{
                                fontWeight: "500",
                                fontFamily: "serif",
                                fontSize: "3rem",
                                marginBottom: "4rem",
                                maxWidth: "20rem",
                            }}
                        >
                            Welcome to Our Restaurant
                        </h1>
                        <p
                            style={{
                                color: "#4b5563",
                                lineHeight: "1.5rem",
                                fontSize: "0.875rem",
                                maxWidth: "18rem",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "1.25rem",
                                marginTop: "2.25rem",
                            }}
                        >
                            <a
                                style={{
                                    backgroundColor: "#000",
                                    fontFamily: "serif",
                                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                                    color: "white",
                                    borderTopLeftRadius: "1rem",
                                    borderBottomRightRadius: "1rem",
                                    borderTopRightRadius: "0.375rem",
                                    borderBottomLeftRadius: "0.375rem",
                                    padding: "1rem 1.75rem",
                                    whiteSpace: "nowrap",
                                    textDecoration: "none",
                                }}
                                href=""
                            >
                                Menu
                            </a>
                            <a
                                style={{
                                    backgroundColor: "#EA6D27",
                                    fontFamily: "serif",
                                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                                    color: "white",
                                    borderTopLeftRadius: "1rem",
                                    borderBottomRightRadius: "1rem",
                                    borderTopRightRadius: "0.375rem",
                                    borderBottomLeftRadius: "0.375rem",
                                    padding: "1rem 1.75rem",
                                    whiteSpace: "nowrap",
                                    textDecoration: "none",
                                }}
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
