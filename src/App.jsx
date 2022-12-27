import Sidebar from "./components/Sidebar";
import { RiInputCursorMove } from "react-icons/ri";
function App() {
  return (
    <>
      <div className=" h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex items-center justify-center bg-gray-900 text-white h-10 ">
        <span className="rounded-lg text-green-500 mr-3">
          {<RiInputCursorMove size="25" />}
        </span>
        <h1 className=" flex justflex-row select-none font-Poppins font-bold text-lg ">
          Text Former
        </h1>
      </div>
      <Sidebar />
    </>
  );
}

export default App;
