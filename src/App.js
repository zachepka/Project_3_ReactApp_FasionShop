import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Arrivals from "./components/arrivals/Arrivals";
import Payday from "./components/payday/Payday";

function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
    </div>
  );
}

export default App;