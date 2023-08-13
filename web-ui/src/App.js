import { store } from "./store/store";
import { Provider as ReduxProvider } from "react-redux";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          {/* <Route path="/root" element={<Home/>} /> */}

  
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </ReduxProvider>
  );
}

export default App;
