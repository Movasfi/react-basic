import { Outlet } from "react-router-dom"

const MessageLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-4 p-7">
            <Outlet />
        </div>
    )
}

export default MessageLayout