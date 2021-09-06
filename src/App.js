import "./styles.css";
import { ProductDisplayPage } from "./Product-Page/product-display-page";
import { HeaderComponent } from "./Header-Page/header-page";
export default function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ProductDisplayPage />
    </div>
  );
}
