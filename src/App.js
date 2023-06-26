import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Products from "./pages/Products/products";
import ProductDetails from "./pages/ProductDetails/productDetails";
import Cart from "./pages/Cart/cart";
import NotFound from "./pages/notFound";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Protected from "./components/utils/Protected";
import { useSelector } from "react-redux";

function App() {
    const { signedIn } = useSelector((state) => state.auth);
    
    return (
        <Routes>
            <Route element={<MainLayout isSignedIn={signedIn} />}>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products">
                    <Route index element={<Products />} />
                    <Route path=":id" element={<ProductDetails />} />
                </Route>
                <Route
                    path="/cart"
                    element={
                        <Protected isSignedIn={signedIn}>
                            <Cart />
                        </Protected>
                    }
                    exact
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
