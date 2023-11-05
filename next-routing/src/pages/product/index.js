import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <Link href="/product/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/product/2" replace>
        <h2>Product 3</h2>
      </Link>
    </>
  );
};

export default ProductList;
