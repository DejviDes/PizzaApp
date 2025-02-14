import ChefImg from "../assets/img/chef.png";

function Chef() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "1.25rem",
          alignItems: "center",
          maxWidth: "72rem",
          margin: "6rem auto",
          padding: "0 2.5rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontWeight: "500",
              fontFamily: "serif",
              fontSize: "3rem",
              marginBottom: "3rem",
              maxWidth: "20rem",
            }}
          >
            Our Expert Chef
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
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              fontSize: "0.875rem",
              color: "#4b5563",
              marginTop: "3rem",
              marginBottom: "2rem",
            }}
          >
            {[...Array(2)].map((_, colIdx) => (
              <ul key={colIdx} style={{ maxWidth: "15rem" }}>
                {[...Array(3)].map((_, rowIdx) => (
                  <li
                    key={rowIdx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: rowIdx < 2 ? "1.25rem" : "0",
                    }}
                  >
                    <span
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#EA6D27",
                        color: "white",
                        borderRadius: "50%",
                        marginRight: "0.75rem",
                        flexShrink: 0,
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </span>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.25rem",
              marginTop: "2.25rem",
              marginLeft: "5rem",
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
        <div style={{ display: "flex" }}>
          <img src={ChefImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
