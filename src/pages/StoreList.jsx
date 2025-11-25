import { Link } from "react-router-dom";
import storesData from "../data/storeData.json";

const StoreList = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Discover Top Electronics Stores</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {storesData.map((store) => (
          <Link
            key={store.id}
            to={`/store/${store.id}`}
            className="rounded-xl shadow hover:shadow-xl transition bg-white border overflow-hidden"
          >
            <img src={store.images[0]} alt={store.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{store.name}</h2>
              <p className="text-gray-500 text-sm">{store.description}</p>

              {/* Rating */}
<div className="flex items-center gap-1 mt-2">
  <span className="text-green-600 font-bold">⭐ {store.rating}</span>
  <span className="text-sm text-gray-500">({store.reviews} reviews)</span>
</div>


              <p className="text-sm font-semibold mt-2">
                📍 {store.address}
              </p>

              <div className="flex gap-2 mt-3">
                 <span className="flex items-center gap-1 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  ✔ Verified
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
