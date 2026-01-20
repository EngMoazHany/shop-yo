import "./Home.css";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="tag">NEW COLLECTION</span>

          <h1>
            Wear Your <br />
            <span>Identity</span>
          </h1>

          <p>
            Premium streetwear crafted with purpose.
            Designed to be more than just clothing.
          </p>

          <a href="/products" className="hero-btn btn">
            Explore Products
          </a>
        </div>
      </section>
    </div>
  );
}
