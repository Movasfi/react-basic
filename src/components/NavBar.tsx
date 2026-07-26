import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import Button from "./Button";

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn, setUserName } = useUser();
    const navigate = useNavigate();
    const navBarHeadersNames = [{
        routerName: "home",
        redirectTo: "/"
    }, {
        routerName: "messages",
        redirectTo: "/messages"
    }, {
        routerName: "new Message",
        redirectTo: "/messages/new"
    }, {
        routerName: "user",
        redirectTo: "/user"
    }, {
        routerName: "profile",
        redirectTo: "/profile"
    },];

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName("Bitter")
        navigate("/");
    };
    const renderNavbar = navBarHeadersNames.map((navBarHeadersName) => {
        const { redirectTo, routerName } = navBarHeadersName
        if (isLoggedIn && routerName === "user" ) {
            return;
        }

        if (isLoggedIn === false && routerName === "profile" ) {
            return;
        }
        return (
            <li key={routerName} className="bg-yellow-600 p-3 sm:p-5 whitespace-nowrap text-center">
                <Link to={redirectTo}>{routerName}</Link>
            </li>
        );
    })
    return (
        <nav className="w-full px-2 sm:px-0">
            <ul className="list-none flex flex-wrap justify-center items-center gap-3 sm:gap-6">
                {renderNavbar}
                {isLoggedIn && (
                    <li className="bg-red-600 p-3 sm:p-5 whitespace-nowrap text-center">
                        <Button text="logout" className="cursor-pointer " onClick={handleLogout} />
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;