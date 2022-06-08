import Home from "./pages/Home";
import Detail from './pages/Detail';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Characters from "./pages/Characters";
import Reviews from "./pages/Reviews";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/detail/:id' exact element={<Detail />} />
        <Route path='/detail/:id/characters' element={<Characters />} />
        <Route path='/detail/:id/review' element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
