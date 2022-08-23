import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from "./pages/Home";
// import { NewPage } from "./pages/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<NewPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
