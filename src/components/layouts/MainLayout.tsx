import { Outlet } from "react-router-dom"
import Navbar from "../NavBar"


const MainLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-4 p-7">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout