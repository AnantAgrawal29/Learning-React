import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <h1>Product Details!</h1>
      <p>{id}</p>
      <p>
        {/* if relative property is not set to path then the route/url
         changes to /root from /root/products/productid and not /root/products*/}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
