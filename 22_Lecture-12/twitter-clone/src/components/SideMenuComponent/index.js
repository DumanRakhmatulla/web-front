import {
  BOOKMARKS_SVG,
  EXPLORE_SVG,
  HOME_SVG,
  MESSAGES_SVG,
  NOTIFICATIONS_SVG,
} from "./images2";
import MenuItem from "./MenuItem";
import "./style.css";

function SideMenu() {
  const menu = [
    {
      icon: HOME_SVG,
      name: "Home",
    },
    {
      icon: EXPLORE_SVG,
      name: "Explore",
    },
    {
      icon: NOTIFICATIONS_SVG,
      name: "Notifications",
    },
    {
      icon: MESSAGES_SVG,
      name: "Messages",
    },
    {
      icon: BOOKMARKS_SVG,
      name: "Bookmarks",
    },
  ];

  return (
    <div className="mt-3 mx-5 w-25">
      <img src={require("./images/twitter.png")} className="logo-icon mb-2" />

      {menu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
}

export default SideMenu;
