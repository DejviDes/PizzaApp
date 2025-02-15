import ReviewsCards from "./ReviewsCards";
import NewLetterImg from "../assets/img/newsletter.png"


function Reviews() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f3f4f6"}}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "11rem"
            }}>
                <h1 style={{
                    textAlign: "center",
                    fontWeight: 500,
                    fontFamily: "serif",
                    fontSize: "3rem",
                    lineHeight: "1rem",
                    marginTop: "4rem",
                    marginBottom: "3rem",
                }}>
                    Our Happy Customers
                </h1>
                <p style={{
                    maxWidth: "20rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.5rem",
                    textAlign: "center",
                    color: "#4b5563",
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                </p>
            </div>
            <ReviewsCards/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", position: "relative"}}>
                <img style={{marginTop: "10rem"}} src={NewLetterImg}/>
                <h1 style={{
                    fontWeight: "500",
                    fontFamily: "serif",
                    fontSize: "3.25rem",
                    textAlign: "center",
                    maxWidth: "45rem",
                    position: "absolute",
                    top: "12.5rem",
                    color: "white",
                    letterSpacing: "0.1rem",
                }}>Get Or Promo Code by Subscribing To our Newsletter</h1>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "3.5rem"
                }}>
                    <div style={{position: "relative"}}>
                        <input style={{
                            width: "42.5rem",
                            height: "5rem",
                            borderRadius: "1.5rem",
                            border: "none",
                            padding: "0 1rem",
                            marginTop: "2.5rem",
                            backgroundColor: "white",
                            color: "#4b5563",
                        }} type="text" placeholder="Enter Your Email"/>
                        <button style={{
                            width: "10rem",
                            height: "3.5rem",
                            borderRadius: "1rem",
                            border: "none",
                            padding: "0 1rem",
                            marginTop: "1rem",
                            backgroundColor: "#EA6D27",
                            color: "white",
                            fontWeight: "600",
                            position: "absolute",
                            bottom: "0.75rem",
                            right: "1rem",
                        }}>Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
