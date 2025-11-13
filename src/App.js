import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/global.css"
import ArticlePage from "./pages/ArticlePage";
import ScrollToTop from "./components/ScrollTop";
import MatchPage from "./pages/MatchPage"; 
import JournalistPage from "./pages/JournalistPage";
import RefereePage from "./pages/RefereePage";

function App() {
  
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/news/:id" element={<ArticlePage />} />
          <Route path="/match/:id" element={<MatchPage />}></Route>
          <Route path="/journalist-page/:id" element={<JournalistPage/>}></Route>
          <Route path="/referee/:refName" element={<RefereePage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
