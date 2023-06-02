import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayouts, { CatogoryLoader } from "./layouts/RootLayouts";
import Detail, { ProductDetailLoader } from "./pages/home/Detail";
import Home, { ProductLoader } from "./pages/home/Home";
import Category, { CategoryLoader } from "./pages/category/Category";
import ErrorPage from "./components/ErrorPage";
import Search, { SearchLoader } from "./pages/search/Search";
import Cart from "./pages/cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayouts />}
      loader={CatogoryLoader}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} loader={ProductLoader} />
      <Route
        path="/product/:id"
        element={<Detail />}
        loader={ProductDetailLoader}
      />
      <Route
        path="/category/:category"
        element={<Category />}
        loader={CategoryLoader}
      />
      <Route
        path="/search/:search"
        element={<Search />}
        loader={SearchLoader}
      />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
