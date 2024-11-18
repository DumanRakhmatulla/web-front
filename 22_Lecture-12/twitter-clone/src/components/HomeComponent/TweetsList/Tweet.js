import { COMMENTS, KZ_IMG_PATH, LIKES, RETWEETS, SHARE } from "../images";

export default function Tweet(item) {
  console.log(item);
  return (
    <div className="mt-3 px-3" style={{ borderBottom: "2px solid whitesmoke" }}>
      <p className="mx-5" style={{ fontSize: 13, fontWeight: "600" }}>
        You might like! <span style={{ color: "blue" }}>See more</span>
      </p>
      <div className="d-flex">
        <img
          src={item.img}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <div className="mx-3">
          <p className="" style={{ fontWeight: 600 }}>
            {item.authorName}
            <span style={{ color: "grey" }}>{item.authorUsername}</span>
          </p>
          <p>{item.content}</p>
        </div>
      </div>

      <div
        className="d-flex m-auto justify-content-between"
        style={{ width: "83%" }}
      >
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{COMMENTS}</div>
          <p className="px-1">{item.replies}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{RETWEETS}</div>
          <p className="px-1">{item.retweets}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{LIKES}</div>
          <p className="px-1">{item.likes}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{SHARE}</div>
        </div>
      </div>
    </div>
  );
}
