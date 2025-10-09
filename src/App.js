import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/global.css"
import ArticlePage from "./pages/ArticlePage";
import ScrollToTop from "./components/ScrollTop";

function App() {
  
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/news/:id" element={<ArticlePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
