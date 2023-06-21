import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Products from "./pages/products";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/cart";
import Header from "./components/layout/Header";
import NotFound from "./pages/notFound";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products">
                    <Route index element={<Products />} />
                    <Route path=":id" element={<ProductDetails />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
