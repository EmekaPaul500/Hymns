import "./App.css";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home/Home";
import Hymn from "./components/Hymn/Hymn";
import Verses from "./Verses/Verses";
import Loading from "./components/Loading";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Loading />} />
        <Route path="/hymn" element={<Hymn />} />
        <Route path="/verses" element={<Verses />} />
      </Route>
    )
  );
  // return (
  //   <main>
  //     <Loading />
  //   </main>
  // );

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
