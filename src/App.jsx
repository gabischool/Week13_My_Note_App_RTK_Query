import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";
import { Routes, Route,useLocation } from "react-router-dom";

function App() {

  return (
    <div className="bg-blue-600 min-h-screen flex">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl text-white mb-5 mt-5">My Notes</h3>
          <Routes>
          {
            // locations.pathname === "/" ? <Route path="/" element={<AddNote />} /> :
            // <Route path="/edit/:id" element={<EditNote />} />
            }
          </Routes>
            

          <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;