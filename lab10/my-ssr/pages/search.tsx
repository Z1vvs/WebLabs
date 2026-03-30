import { GetServerSideProps } from "next";

type Product = { id: number; title: string };
type Props = { results: Product[]; query: string; total: number };

export default function SearchPage({ results, query, total }: Props) {
  return (
    <div className="container">
      <div className="card">
        <h1>Search Results</h1>
        <p>
          <strong>Query:</strong> "{query}" |<strong> Found:</strong> {total}{" "}
          results
        </p>

        {results.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem", opacity: 0.7 }}>
            No products found for "{query}"
          </p>
        ) : (
          <div className="search-results">
            {results.map((product) => (
              <div key={product.id} className="search-item">
                <h3>{product.title}</h3>
                <a href={`/product/${product.id}`} className="btn">
                  View Product →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = (context.query.q as string) || "";
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const results = data
    .filter((item: any) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    )
    .slice(0, 20) as Product[];

  return { props: { results, query, total: results.length } };
};
