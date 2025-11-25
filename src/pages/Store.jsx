import { useParams } from "react-router-dom";
import { useState } from "react";  // 🔥 Added for filter
import storesData from "../data/storeData.json";

const Store = () => {
  const { id } = useParams();
  const store = storesData.find(item => item.id === id);
  const [filter, setFilter] = useState("All");    // 🔥 Filter state added
  const [selectedProduct, setSelectedProduct] = useState(null); // 🔥 Modal state

  if (!store) return <h1 className="text-center mt-10">Store Not Found!</h1>;

  // 🔥 Filter Logic
  const filteredProducts = store.products.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* BIG BANNER IMAGE */}
      <div className="w-full h-60 rounded-lg overflow-hidden mb-6 relative">
        <img src={store.images[0]} className="w-full h-full object-cover" />
        <span className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded text-sm">
          Show all images
        </span>
      </div>

      {/* STORE NAME + DESCRIPTION */}
      <h1 className="text-3xl font-bold">{store.name}</h1>
      <p className="text-gray-600 mt-1">{store.description}</p>
      <p className="text-sm font-semibold mt-2">📍 {store.address}</p>

      {/* Rating */}
      <div className="mt-2 flex gap-2 items-center">
        <span className="text-green-600 font-bold">⭐ {store.rating}</span>
        <span className="text-gray-500 text-sm">({store.reviews} Reviews)</span>
      </div>

      {/* CONTACT OPTIONS */}
      <div className="flex gap-4 mt-4">
        <a href={`tel:${store.phone}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg">📞 Call</a>
        <a href={`https://wa.me/${store.whatsapp}`} target="_blank" className="bg-green-500 text-white py-2 px-4 rounded-lg">💬 WhatsApp</a>
        <a href={`${store.mapUrl}`} target="_blank" className="bg-black text-white py-2 px-4 rounded-lg">📍 Directions</a>
      </div>

      {/* OFFERS */}
      <h2 className="text-2xl font-semibold mt-8">Offers</h2>
      <div className="flex gap-6 overflow-x-auto mt-4">
        {store.offers?.map((offer, i) => (
          <div key={i} className="bg-green-100 px-4 py-2 rounded-lg shadow min-w-[200px]">
            {offer}
          </div>
        ))}
      </div>

      {/* 🔥 PRODUCT FILTER BUTTONS */}
      <div className="flex gap-4 my-8">
        {["All", "Mobiles", "Laptops", "Accessories"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 text-sm rounded 
              ${filter === category ? "bg-green-600 text-white" : "bg-gray-200"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PRODUCTS SECTION */}
      <h2 className="text-2xl font-semibold">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {filteredProducts.map((product, i) => (
          <div key={i} className="border rounded-lg p-4 shadow hover:shadow-xl transition bg-white">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <p className="text-green-600 font-bold mt-2">{product.price}</p>
            <button
              className="bg-blue-500 text-white w-full py-2 rounded mt-3"
              onClick={() => setSelectedProduct(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

     {/* 🔥 PRODUCT MODAL */}
{selectedProduct && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">

      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        onClick={() => setSelectedProduct(null)}
      >
        ✖
      </button>

      {/* Product Image */}
      <img
        src={selectedProduct.image}
        className="w-full h-48 object-cover rounded-md"
        alt="product"
      />

      {/* Product Details */}
      <h2 className="text-xl font-bold mt-4">{selectedProduct.name}</h2>
      <p className="text-gray-600">{selectedProduct.category}</p>
      <p className="text-green-600 font-bold text-lg mt-2">{selectedProduct.price}</p>

      {/* 🛒 Order on Website Button */}
      <button
        className="block bg-black text-white w-full py-2 rounded mt-4"
        onClick={() => alert("Order page coming soon!")}
      >
        🛒 Order on Website
      </button>

    </div>
  </div>
)}

    </div>
  );
};

export default Store;
