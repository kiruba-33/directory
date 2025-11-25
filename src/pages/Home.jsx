import Brands from "../compoent/Brands";

import FlashDeal from "../compoent/FlashDeal";
import OfferSlider from "../compoent/OfferSlider";
import TopCategories from "../compoent/TopCategories";


export default function HomePage() {
  return (
    <>
<div className="min-h-screen bg-primary text-textDark pt-16">
      <OfferSlider/>
      <TopCategories/>
      <FlashDeal/>
      <Brands/>

      {/* WHY CHOOSE US SECTION */}
<div className="max-w-6xl mx-auto my-16 bg-gray-100 p-8 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6 text-center">
    Why Choose <span className="text-red-500">DIRECTORYPLUS</span>?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">

    <div className="flex items-start gap-4">
      <span className="text-green-600 text-2xl">✔</span>
      <p>Verified & Trusted Local Stores</p>
    </div>

    <div className="flex items-start gap-4">
      <span className="text-green-600 text-2xl">✔</span>
      <p>Best Deals & Offers Updated Daily</p>
    </div>

    <div className="flex items-start gap-4">
      <span className="text-green-600 text-2xl">✔</span>
      <p>Find Products, Services & Jobs Easily</p>
    </div>

    <div className="flex items-start gap-4">
      <span className="text-green-600 text-2xl">✔</span>
      <p>One Platform for All Local Needs</p>
    </div>

  </div>
</div>

    </div>
    </>
  );
}
