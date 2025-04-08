import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services" >Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
