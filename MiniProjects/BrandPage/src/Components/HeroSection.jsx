import "../ComponentsStyles/HeroSection.css";
export default function HeroSection() {
  return (
    <main className="Hero container">
      <div className="HeroContent">
        <h1>Run into The wILD</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
      </div>
      <div className="HeroButton">
        <button>Shop Now</button>
        <button className="button2">Category</button>
      </div>
      <div className="shopping">
        <p>Also available on</p>
        <div className="brandIcons">
        <img src="/src/assets/flipkart.png" alt="img" />
        <img src="/src/assets/amazon.png" alt="img" />
        </div>
      </div>
      <div className="HeroImage">
        <img src="/src/assets/shoe_image.png" alt="img" />
      </div>
    </main>
  );
}
