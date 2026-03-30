import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

type Props = { product: Product | null };

function StockCounter() {
  const [stock, setStock] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStock(Math.floor(Math.random() * 10) + 5);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (stock === null) return <p className="loading">Loading stock...</p>;

  return (
    <div className="stock-section">
      <p>
        <strong>Available Stock:</strong> {stock}
      </p>
      <button
        className="btn"
        onClick={() => setStock(Math.max(0, stock - 1))}
        disabled={stock === 0}
      >
        {stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}

export default function ProductPage({ product }: Props) {
  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="container">
      <div className="card">
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} className="product-img" />
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <StockCounter />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params!;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) return { notFound: true };
    return { props: { product: await res.json() } };
  } catch {
    return { notFound: true };
  }
};
