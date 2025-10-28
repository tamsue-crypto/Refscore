import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/global.css"
import ArticlePage from "./pages/ArticlePage";
import ScrollToTop from "./components/ScrollTop";
import MatchPage from "./pages/MatchPage"; 

function App() {
  
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/news/:id" element={<ArticlePage />} />
          <Route path="/match/:id" element={<MatchPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
