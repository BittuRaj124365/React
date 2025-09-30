import "../ComponentsStyles/Navbar.css"
export default function Navbar() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/src/assets/Frame 2 1.png" alt="do some coding" />
      </div>
      <ul>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </ul>
    </nav>
  );
}
