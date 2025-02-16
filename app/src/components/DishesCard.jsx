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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        backgroundColor: "white",
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
                        <div style={{position: "relative"}}>
                            <img src={Pizza1} alt=""/>
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
                        Lumpia with Sauce
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        backgroundColor: "#f3f4f6",
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
                        <div style={{position: "relative"}}>
                            <img src={Pizza2} alt=""/>
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
                        Fish and Veggie
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        backgroundColor: "#f3f4f6",
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
                        <div style={{position: "relative"}}>
                            <img src={Pizza3} alt=""/>
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
                        Tofu Chili
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        backgroundColor: "#f3f4f6",
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
                        <div style={{position: "relative"}}>
                            <img src={Pizza4} alt=""/>
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
                        Egg and Cucumber
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
        </div>
    );
}

export default DishesCard;
