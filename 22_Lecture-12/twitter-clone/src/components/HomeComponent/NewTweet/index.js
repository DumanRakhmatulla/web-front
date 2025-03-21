import { PROFILE_IMG_PATH } from "../images";

export default function NewTweet() {
  return (
    <div className="p-3" style={{ borderBottom: "2px solid whitesmoke" }}>
      <img
        src={PROFILE_IMG_PATH}
        style={{ width: 50, height: 50, borderRadius: 50 }}
      />
      <input
        placeholder="Whats happening?"
        style={{ border: "none", fontSize: 18, outline: 0 }}
        className="mx-3"
      />
    </div>
  );
}
