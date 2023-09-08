import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import Cart from "./Cart";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const url = await fetch(API_URL);
      const data = await url.json();
      setPosts(data);
      console.log("yhs se jaa rha data");
      console.log(data);

     
    } catch (error) {
      console.log("error");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  let [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    console.log("item added to cart");
  }

  function removeFromCart(itemToRemove) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== itemToRemove)
      );
      console.log("item removed from cart");
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div
          className="min-h-[80vh] grid sm:grid-cols-2 
        md:grid-cols-3 space-x-5 
        space-y-10 lg:grid-cols-4 max-w-7xl
         mx-auto p-2 "
        >
          {posts.map((post) => (
            <Product
              key={post.id}
              post={post}
              
            />
          ))}
        </div>
      ) : (
        console.log("posts gayab hai")
      )}

    </div>
  );
};

export default Home;
