import { useRouter } from "next/router";

// extract both productId and reviewId and display in browser
const Review = () => {
  const routeParams = useRouter();
  const { productId, reviewId } = routeParams.query;

  return (
    <>
      <h1>
        Product {productId} has review {reviewId}
      </h1>
    </>
  );
};

export default Review;
