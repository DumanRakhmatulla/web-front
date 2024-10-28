// jsx
import BgImg from "./images/pattern-background-desktop.svg";
import IllHero from "./images/illustration-hero.svg";
import IconMusic from "./images/icon-music.svg";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
              borderRadius: "20px",
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
              height: "80px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
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
                  }}
                >
                  Annual Plan
                </p>
                <p
                  style={{
                    margin: "0",
                  }}
                >
                  $59.99/year
                </p>
              </div>
            </div>
            <a>Change</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
