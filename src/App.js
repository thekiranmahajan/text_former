import Sidebar from "./components/Sidebar";
import TextBox from "./components/TextBox";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar/>
        <TextBox/>
        <Sidebar/>
      </div>
    </>
  );
}

export default App;
