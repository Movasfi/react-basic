import { MessageList } from "../../components/MessageList"
import { ToastContainer } from "react-toastify"
import Input from "../../components/Input"
import useColor from "../../hooks/useColor"


const ProfilePage = () => {
    const { color, setColor } = useColor()

    console.log(color);
    return (

        <>
            <div className="flex justify-center items-center flex-col gap-4">
                <p>Choose color for messages</p>
                <Input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-10 h-10 p-0 border-0 rounded-full cursor-pointer"
                />
            </div>

            <MessageList color={color} allMessage={false} />
            <div><ToastContainer /></div>
        </>
    )
}

export default ProfilePage