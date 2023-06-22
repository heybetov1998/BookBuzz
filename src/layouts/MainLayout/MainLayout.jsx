import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header/Header";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <footer></footer>
        </>
    );
};

export default MainLayout;
