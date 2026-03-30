export default function NotFound() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", paddingTop: "5rem" }}
    >
      <div className="card" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "6rem", color: "#6b6e70", margin: "0" }}>404</h1>
        <h2>Page Not Found</h2>
        <p>The product or page you're looking for doesn't exist.</p>
        <a href="/" className="btn">
          Back to Home
        </a>
      </div>
    </div>
  );
}
