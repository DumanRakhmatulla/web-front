export default function MenuItem({ item }) {
  const { icon, name } = item;
  return (
    <div className="d-flex my-3">
      <div style={{ width: 30, height: 30 }}>{icon}</div>
      <p className="mx-3" style={{ fontSize: 20, color: "black" }}>
        {name}
      </p>
    </div>
  );
}
