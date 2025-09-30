import "../ComponentsStyles/Navigation.css";
export default function Navigation() {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/src/assets/brand_logo.png" alt="logo" />
        </div>
        <ul className="list">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}
