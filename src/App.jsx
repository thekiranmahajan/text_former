import Sidebar from "./components/Sidebar";
import { RiInputCursorMove } from "react-icons/ri";
function App() {
  return (
    <>
      <div className=" ml-12 flex items-center lg:ml-16 justify-center bg-gray-900 text-white h-10 ">
        <span className="rounded-lg text-green-500 mr-3">
          {<RiInputCursorMove size="25" />}
        </span>
        <h1 className=" flex justflex-row select-none font-Poppins font-bold ">
          Text Former
        </h1>
      </div>
      <Sidebar />
    </>
  );
}

export default App;
