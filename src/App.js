import Sidebar from "./components/Sidebar";
import { RiInputCursorMove } from "react-icons/ri";
function App() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center bg-gray-900 text-white h-10 scrollbar-hide">
          <span className="rounded-lg text-green-500 mr-3">
            {<RiInputCursorMove size="25" />}
          </span>
          <h1 className=" flex justflex-row select-none font-Poppins font-bold text-lg ">
            Text Former
          </h1>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
