import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewProducts } from "../../service/api2";
import ProductSpecs from "./ProductSpecs";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { isLoggedIn } from "../utils/auth";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  // FETCH PRODUCT
  const getProduct = async () => {
    const products = await viewProducts();
    const selectedProduct = products.find(p => p._id === id);

    if (selectedProduct) {
      setProduct(selectedProduct);
      setSelectedImage(selectedProduct.images?.[0] || "");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const discountedPrice = product.price - product.discount;
  const taxAmount = Math.round((discountedPrice * product.taxClass) / 100);
  const finalPrice = discountedPrice + taxAmount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT: IMAGES */}
      <div>
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-96 object-contain rounded"
        />

        <div className="flex gap-3 mt-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover border rounded cursor-pointer
                ${selectedImage === img ? "border-blue-600" : "border-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: DETAILS */}
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-gray-500 mb-2">{product.brand}</p>

        <div className="flex items-center gap-4 my-4">
          <span className="text-2xl font-bold text-green-600">
            ₹{finalPrice.toLocaleString("en-IN")}
          </span>
          <span className="line-through text-gray-400">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>

        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="flex gap-4 mt-4">
            <button
              onClick={() => {
                if (!isLoggedIn()) {
                  alert("Please login to add items to cart");
                  return;
                }
                addToCart(product);
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                if (!isLoggedIn()) {
                  alert("Please login to add items to wishlist");
                  return;
                }

                isInWishlist(product._id)
                  ? removeFromWishlist(product._id)
                  : addToWishlist(product);
              }}
              className={`px-6 py-3 rounded border transition ${
                isInWishlist(product._id)
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {isInWishlist(product._id)
                ? "Remove Wishlist ❤️"
                : "Add to Wishlist 🤍"}
            </button>
          </div>


        {/* SPECS */}
        <ProductSpecs product={product} />

      </div>
    </div>
  );
};

export default ProductDetails;
