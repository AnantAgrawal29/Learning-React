import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Welcome Home!</h1>
      {/* Link element set the page url to specified to attribute 
      prevents from sending http reuqest to the react again 
      which causes reload of whole website */}
      <Link to="/products">See all Products</Link>
    </>
  );
}

export default HomePage;
