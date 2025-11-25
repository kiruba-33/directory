import Brands from "../compoent/Brands";

import FlashDeal from "../compoent/FlashDeal";
import OfferSlider from "../compoent/OfferSlider";
import TopCategories from "../compoent/TopCategories";


export default function HomePage() {
  return (
<div className="min-h-screen bg-primary text-textDark pt-16">
      <OfferSlider/>
      <TopCategories/>
      <FlashDeal/>
      <Brands/>
    </div>
  );
}
