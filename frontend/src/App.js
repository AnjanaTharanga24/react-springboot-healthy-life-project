import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from './pages/Register';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Signin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
