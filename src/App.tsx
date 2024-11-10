import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Reception /></Layout>} />
          <Route path="floor/:index" element={<PrivateRoute component={<Floor />} />} />
          <Route path="forbidden" element={<Forbidden />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
