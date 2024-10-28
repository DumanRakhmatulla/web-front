import IllHero from "../images/illustration-hero.svg";
import IconMusic from "../images/icon-music.svg";

const Card = () => {
  return (
    <div
      style={{
        borderRadius: "20px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <div>
        <img
          src={IllHero}
          style={{
            width: "400px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "0",
          }}
        >
          Order Summary
        </h1>
        <p
          style={{
            margin: "0",
            color: "gray",
          }}
        >
          You can now listen to millions of songs, <br /> audiobooks, and
          podcasts on any device <br /> anywhere you like!
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#D6E1FF",
            borderRadius: "20px",
            alignItems: "center",
            width: "350px",
            height: "100px",
            backgroundColor: "rgb(248, 249, 254, 255)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={IconMusic}
              style={{
                width: "50px",
                height: "50px",
              }}
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "18px",
                  padding: "0 0 0 20px",
                  fontWeight: "700",
                }}
              >
                Annual Plan
              </p>
              <p
                style={{
                  margin: "0",
                  color: "gray",
                }}
              >
                $59.99/year
              </p>
            </div>
          </div>
          <a
            style={{
              fontWeight: "700",
              fontSize: "18px",
              color: "rgba(56, 42, 225, 255)",
              textDecoration: "underline",
            }}
          >
            Change
          </a>
        </div>
        <button
          style={{
            width: "350px",
            height: "50px",
            color: "#ffffff",
            backgroundColor: "rgba(56, 42, 225, 255)",
            border: "none",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "700",
            boxShadow: "0px 16px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          Proceed to Payment
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "gray",
            fontSize: "15px",
            fontWeight: "700",
          }}
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default Card;
