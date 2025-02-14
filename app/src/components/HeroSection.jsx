import HeroImg from "../assets/img/heroImg.png";
import HeroSubImg from "../assets/img/heroSubImg.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Herosection() {
  return (
    <div
      style={{ width: "100%", minHeight: "100vh", backgroundColor: "white" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          alignItems: "center",
          maxWidth: "72rem",
          margin: "0 auto",
          marginBottom: "4rem",
          paddingTop: "13rem",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontWeight: 500,
              fontFamily: "serif",
              fontSize: "3rem",
              lineHeight: "1",
              marginBottom: "4rem",
              maxWidth: "24rem",
            }}
          >
            We provide the best food for you
          </h1>
          <p
            style={{
              color: "#4b5563",
              fontSize: "0.875rem",
              maxWidth: "20rem",
              lineHeight: "1.75rem",
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
                backgroundColor: "#000000",
                fontFamily: "serif",
                filter: "drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)))",
                color: "white",
                borderTopLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderTopRightRadius: "0.375rem",
                borderBottomLeftRadius: "0.375rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "1.75rem",
                paddingRight: "1.75rem",
                textWrap: "nowrap",
              }}
              href=""
            >
              Menu
            </a>
            <a
              style={{
                backgroundColor: "#EA6D27",
                fontFamily: "serif",
                filter: "drop-shadow(var(0 3px 3px rgb(0 0 0 / 0.12)))",
                color: "white",
                borderTopLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderTopRightRadius: "0.375rem",
                borderBottomLeftRadius: "0.375rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "1.75rem",
                paddingRight: "1.75rem",
                textWrap: "nowrap",
              }}
              href=""
            >
              Book a table
            </a>
          </div>
          <div style={{ marginTop: "4rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                color: "#4b5563",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  borderRadius: "9999px",
                  border: "1px solid black",
                  padding: "0.5rem",
                  color: "black",
                }}
              >
                <FaFacebookF />
              </div>
              <div
                style={{
                  cursor: "pointer",
                  borderRadius: "9999px",
                  border: "1px solid black",
                  padding: "0.5rem",
                  color: "black",
                }}
              >
                <FaInstagram />
              </div>
              <div
                style={{
                  cursor: "pointer",
                  borderRadius: "9999px",
                  border: "1px solid black",
                  padding: "0.5rem",
                  color: "black",
                }}
              >
                <FaTwitter />
              </div>
              <div
                style={{
                  height: "0px",
                  width: "8rem",
                  border: "1px solid #e5e7eb",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src={HeroImg} alt="" />
          <img
            style={{ position: "absolute", bottom: "2rem", left: "-12rem" }}
            src={HeroSubImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
