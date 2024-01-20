import EmailSubscribe from "./components/EmailSubscribe";
import ImageGallery from "./components/ImageGallery";
import LoginModal from "./components/LoginModal";
import PricingCard from "./components/PricingCard";
import ProductModal from "./components/ProductModal";


function App() {
  return (
    <div className="">
      <EmailSubscribe/>
      <PricingCard/>
      <ProductModal/>
      <ImageGallery/>
      <LoginModal/>
    </div>
  );
}

export default App;
