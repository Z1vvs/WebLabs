export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>SSR E-Commerce Demo</h1>
        <div style={{ display: "grid", gap: "1rem", marginTop: "2rem" }}>
          <a href="/system" className="btn">
            System Status (SSR)
          </a>
          <a href="/product/1" className="btn">
            View Product #1
          </a>
          <a href="/product/999" className="btn">
            Test 404 Page
          </a>
          <a href="/search?q=laptop" className="btn">
            Search "laptop"
          </a>
        </div>
      </div>
    </div>
  );
}
