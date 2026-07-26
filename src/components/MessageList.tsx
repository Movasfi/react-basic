import { type ReactNode } from "react"
import useUser from "../hooks/useUser"
import { useGetUsers } from "../modules/user/api/registerUser"
import type { MessageForm } from "../types/MessageType"
import type { FormValues } from "../types/UserType"
import { useGetMessages } from "../modules/messages/hooks/useGetMessages"
import { X } from "lucide-react"
import useDeleteMessage from "../modules/profile/hooks/useDeleteMessage"

interface MessageData {
    user: string
    message: string
    messageId?: string
}

export const MessageItem = ({ user, message }: MessageData) => {

    return (
        <div className=" p-8  w-fit space-y-2 rounded-md">


            <p className="">Name: <span className="text-xl font-semibold">{user}</span></p>
            <hr />
            <p>Message: {message}</p>
        </div>
    )
}


export const MessageList = ({ allMessage, color }: { allMessage: boolean, color?: string }) => {
    const { mutate } = useDeleteMessage()
    const { userName } = useUser();
    const { data, isError, isLoading, error } = useGetMessages()
    const { data: userData } = useGetUsers()
    const userNameFromDB = userData?.find((userObj: FormValues) => userObj.username === userName);
    const filterMessagesByUserId = data?.filter((messagesObj) => messagesObj.userid === userNameFromDB?.id);

    const filteredData = data?.map((da) => {

        const userNameById = userData?.find((user) => user.id === da.userid);

        return {
            id: da.id,
            userName: userNameById?.username,
            message: da.message
        }
    })

    const renderMessageItemsByUser: ReactNode = filterMessagesByUserId?.map((messageObj: MessageForm) => {
        return (
            <div style={{
                color: color
            }} key={messageObj.id} className={`relative w-fit p-4 rounded-xl border   shadow-sm`}>

                <button
                    type="button"
                    onClick={() => mutate(messageObj.id!)}
                    className="absolute top-3 right-3 p-1 hover:text-red-500 transition-colors z-10 cursor-pointer"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="pr-6 ">
                    <MessageItem
                        messageId={messageObj.id}
                        message={messageObj.message}
                        user={userNameFromDB?.username!}
                    />
                </div>
            </div >
        )

    })
    const renderMessageItemsByEveryone: ReactNode = filteredData?.map((messageObj: any) => {
        return (
            <div className="border rounded-md">
                <MessageItem message={messageObj.message} user={messageObj.userName} />
            </div>
        )

    })
    if (isLoading) {
        return <div>IsLoading</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }
    return (
        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {allMessage ? renderMessageItemsByEveryone : renderMessageItemsByUser}

            {filterMessagesByUserId?.length === 0 && !allMessage && (
                <div className="col-span-full w-full text-center py-4">
                    <p className="w-full">you do not have messages</p>
                </div>
            )}
        </div>
    )
}

