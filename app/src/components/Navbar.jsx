import Logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "white",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.75rem",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img style={{ marginBottom: "1.25rem" }} src={Logo} alt="" />
          <h2
            style={{
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              fontWeight: 600,
            }}
          >
            restaurant
          </h2>
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2.5rem",
            color: "#4b5563",
          }}
        >
          <li style={{ cursor: "pointer" }}>Menu</li>
          <li style={{ cursor: "pointer" }}>Events</li>
          <li style={{ cursor: "pointer" }}>Gallery</li>
          <li style={{ cursor: "pointer" }}>About</li>
          <li style={{ cursor: "pointer" }}>Contact</li>
        </ul>
        <a
          style={{
            backgroundColor: "#EA6D27",
            fontFamily: "serif",
            filter: "drop-shadow(0 3px 3px rgb(0 0 0 / 0.12))",
            color: "white",
            borderTopLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            borderTopRightRadius: "0.375rem",
            borderBottomLeftRadius: "0.375rem",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
            textWrap: "nowrap",
          }}
          href=""
        >
          Book a table
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
