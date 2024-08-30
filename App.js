import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetails from "./components/Product Details/ProductDetails";
import ProductInfo from "./components/Product/ProductInfo";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          height: "50%",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProductInfo />
          <ProductDetails />
        </div>
      </div>
      <div
        style={{
          height: "10%",
          width: "100%",
        }}
      >
        <Footer />
      </div>
      {/* <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ProductInfo />
        <ProductDetails />
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
