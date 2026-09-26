import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <h1>The Product Details for Product {id}</h1>
    </>
  );
}
