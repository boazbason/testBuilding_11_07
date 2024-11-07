import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

const router = createBrowserRouter([
  //FILL HERE
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Routes>

        <Route path="/" element={<Layout ><Reception /></Layout>} />



        <Route path="floor/:index" element={<PrivateRoute component={<Floor/>} /> } />

      </Routes>
    </div>
  );
}

export default App;
