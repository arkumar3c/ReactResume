import { Outlet, Link } from "react-router-dom";
import DataContext from "./Component/Context/DataContext";

const Layout = () => {
    return (
        <div className="page-layout">
            <div className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home1</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">PortFolio</Link>
                        </li>
                        <li>
                            <Link to="/about">About me</Link>
                        </li>
                        <li>
                            <Link to="/faq">Faq</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-sidebar">
                <DataContext>
                <Outlet />
                </DataContext>
            </div>
        </div>
    )
};

export default Layout;