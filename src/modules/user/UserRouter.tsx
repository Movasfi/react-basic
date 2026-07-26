import { Route, Routes } from "react-router-dom"
import User from "../../pages/User"

const UserRouter = () => {
    return (
        <Routes>
            <Route index element={<User />} />
        </Routes>
    )
}

export default UserRouter