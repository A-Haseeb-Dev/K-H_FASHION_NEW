import Navbar from "./Components/Navbar"; 
import Hero from "./Components/Hero"; 
import NewArrivals from "./Components/NewArrival";
import BestSelling from "./Components/BestSelling";
import SuggestedProduct from "./Components/SuggestedProduct";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewArrivals />
      <BestSelling />
      <SuggestedProduct />
      <Footer />
    </div>
  );
}
