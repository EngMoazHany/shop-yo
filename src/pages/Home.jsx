import "./Home.css";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="tag">WELCOME TO R&Y SHOP MIRROR</span>

          <h1>
            Timeless Luxury <br />
            <span>Designed to Be Carried</span>
          </h1>

          <p>
            R&Y SHOP MIRROR is a curated destination for premium designer bags,
            crafted with exceptional attention to detail, quality, and elegance.
            Each piece reflects a commitment to sophistication, authenticity,
            and refined taste.
          </p>

          <a href="/products" className="hero-btn btn">
            Explore The Collection
          </a>
        </div>
      </section>
    </div>
  );
}
