import styles from "./Navigation.module.css"

const Navigation = () => {
  return ( 
    <nav className="container">
      <div className="logo">
        <img src="" alt="logo denso" />
      </div>

      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;