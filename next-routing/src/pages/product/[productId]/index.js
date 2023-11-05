// import Hook to get parameters from url
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h2>Details about product {productId}</h2>;
};

export default ProductDetails;
