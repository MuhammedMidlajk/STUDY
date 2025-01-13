import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Swalih from "./midlaj";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <button>
            <Link  to={'/midlaj'}>
            click me
            </Link>
            </button>

          <Routes>
            <Route path="/midlaj" element={<Swalih />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
