import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    //style={{ backgroundColor: "#f7f5f6" }}
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
