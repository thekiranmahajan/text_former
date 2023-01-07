import TextManipulator from "./components/TextManipulator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <TextManipulator />
        <Footer />
      </div>
    </>
  );
}

export default App;
