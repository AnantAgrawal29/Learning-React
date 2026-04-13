import logo from "../assets/logo.png";
// CSS Modules and classes
// .module is important for rules from vite
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* paragraph is the class defined in Header.module.css*/}
      <p className={classes.paragraph}>
        {" "}
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
