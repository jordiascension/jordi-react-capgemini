import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Page1 from"./components/Page1"; 
import Page2 from"./components/Page2"; 
import Page3 from"./components/Page3"; 
import Page4 from"./components/Page4"; 
import Page5 from"./components/Page5"; 
import Page6 from"./components/Page6"; 
import Page7 from"./components/Page7"; 
import Page8 from"./components/Page8"; 


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
          <Route exact path="page5" element={<Page5 />} />
          <Route exact path="page6" element={<Page6 />} />
          <Route exact path="page7" element={<Page7 />} />
          <Route exact path="page8" element={<Page8 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1 Function</Link></li>
            <li><Link to="page2">Page 2 LifeCycle</Link></li>
            <li><Link to="page3">Page 3 Calculator</Link></li>
            <li><Link to="page4">Page 4 Table</Link></li>
            <li><Link to="page5">Page 5 Api Table</Link></li>
            <li><Link to="page6">Page 6 Basic Form</Link></li>
            <li><Link to="page7">Page 7 Pension Plan</Link></li>
            <li><Link to="page8">Page 8 Complex Form</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;