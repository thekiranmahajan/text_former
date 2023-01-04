import TextManipulator from "./components/TextManipulator";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <TextManipulator />
      </div>
    </>
  );
}

export default App;
