import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <h1> hello buetpx </h1>
        
      </div>
      {/* this route because router-react-dom dont work link without this lines */}
      <Routes>
        <Route exact path="/" />
      </Routes>
    </Router>
  );
}

export default App;
