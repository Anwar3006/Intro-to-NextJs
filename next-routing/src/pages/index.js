import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order...");
    router.push("/product");
  };
  return (
    <>
      <h1>Hello Home</h1>
      <div style={{ marginTop: "1rem", marginLeft: "1rem" }}>
        <Link href="/blog">Blog</Link>
      </div>
      <div style={{ marginTop: "1rem", marginLeft: "1rem" }}>
        <Link href="/product">Product</Link>
      </div>
      <div style={{ marginTop: "1rem", marginLeft: "1rem" }}>
        <button onClick={handleClick}>Place Order</button>
      </div>
    </>
  );
};

export default Home;
