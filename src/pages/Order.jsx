export default function Order() {
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Place Your Order</h1>
      <input className="border w-full p-2 mb-3" placeholder="Name" />
      <input className="border w-full p-2 mb-3" placeholder="Phone Number" />
      <input className="border w-full p-2 mb-3" placeholder="Email" />
      <textarea className="border w-full p-2 mb-3" placeholder="Product Name"></textarea>
      <button className="bg-black text-white w-full py-2 rounded">Submit Order</button>
    </div>
  );
}
