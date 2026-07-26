import { Route, Routes } from "react-router-dom"
import MessageOverviewPage from "./MessageOverviewPage"
import NewMessagePage from "./NewMessagePage"
import MessageLayout from "../../components/layouts/MessageLayout"


const MessageRouter = () => {
    return (
        <Routes>
            <Route element={<MessageLayout />}>
                <Route index element={<MessageOverviewPage />} />
                <Route path="new" element={<NewMessagePage />} />
            </Route>
        </Routes>
    )
}

export default MessageRouter