import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Page1 from"./components/Page1"; 
import Page2 from"./components/Page2"; 
import Page3 from"./components/Page3"; 
import Page4 from"./components/Page4"; 


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
          <Route exact path="page4" element={<Page4 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1 Function</Link></li>
            <li><Link to="page2">Page 2 LifeCycle</Link></li>
            <li><Link to="page3">Page 3 Calculator</Link></li>
            <li><Link to="page4">Page 4 Table</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;