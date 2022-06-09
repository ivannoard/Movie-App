import Home from "./pages/Home";
import Detail from './pages/Detail';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Characters from "./pages/Characters";
import Reviews from "./pages/Reviews";
import Single from "./pages/Single";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/detail/:id' exact element={<Single />} />
        <Route path='/detail/:id/characters' element={<Single />} />
        <Route path='/detail/:id/review' element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
